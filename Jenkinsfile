pipeline {
    agent { 
        docker { 
            image 'mcr.microsoft.com/playwright:v1.45.0-jammy' // Use the official Playwright image
            args '-u root' // Run as root to avoid permission issues when installing dependencies
        } 
    }
    
    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci' // Install dependencies using package-lock.json for consistent installs
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
            // Store Playwright HTML report as a Jenkins artifact
            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            
            // Store Allure results as a Jenkins artifact (optional, requires Allure plugin)
            // allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
        cleanup {
            cleanWs() // Clean the workspace after the build to free up space and avoid conflicts in future builds
        }
    }
}
