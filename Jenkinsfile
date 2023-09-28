pipeline {
    agent any 
    stages {
        stage('Code') { 
            steps {
                echo "cloning the code "
                git url:"https://github.com/sujitksh/frontend.git",branch:"master"
            }
        }
        stage('Build') { 
            steps {
                echo "build the code "
                sh "DOCKER_BUILDKIT=1 docker build -t react-first-app ."
            }
        }
        stage('Push to dockerHub') { 
            steps {
               echo "push the code on dockerHub"
               withCredentials([usernamePassword(credentialsId: 'dockerHub', usernameVariable: 'dockerHubUser', passwordVariable: 'dockerHubPass')]) {
                  sh "docker tag react-first-app ${env.dockerHubUser}/react-first-app:latest"
                  sh "docker login -u ${env.dockerHubUser} -p ${env.dockerHubPass}"
                  sh "docker push ${env.dockerHubUser}/react-first-app:latest"
               }
              
            }
        }
        stage('Deploy') { 
            steps {
                echo "deploye the code"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}