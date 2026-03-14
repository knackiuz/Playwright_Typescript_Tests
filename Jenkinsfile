pipeline {
    agent any // Run on any available agent

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm ci' // Install dependencies based on package-lock.json
                sh 'npx playwright install' // Install Playwright browsers
            }
        }
        
        stage('Run Tests') {
            steps {
                sh 'npx playwright test || true' // Run tests, but don't fail the build if tests fail
            }
        }
    }
    
    post {
        always {
            publishHTML([                               // Publish the Playwright HTML report
                allowMissing: false,                    // Fail the build if the report is missing
                alwaysLinkToLastBuild: true,            // Always link to the last build's report
                keepAll: true,                          // Keep all generated reports
                reportDir: 'playwright-report',         // Directory where Playwright generates the report
                reportFiles: 'index.html',              // The main HTML file of the report
                reportName: 'Playwright HTML Report'    // Name of the report to display in Jenkins
            ])
        }
        cleanup {
            cleanWs() // Clean the workspace after the build is done
        }
    }
}