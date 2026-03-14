pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline finished. Checkout reports if HTML Publisher plugin is installed.'
        }
        cleanup {
            cleanWs()
        }
    }
}