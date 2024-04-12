# Telemetry Data Publisher to AWS IoT

This project provides a [[Python]] script for reading telemetry data from a CSV file and publishing it to an AWS IoT Core topic using MQTT. It's designed to handle large datasets efficiently, reading data in chunks and publishing batches of data at controlled intervals.

## First Time Setup Instructions

### Prerequisites

Before you begin, ensure you have the following prerequisites installed and set up:

- **[[Python]] (3.6 or later)**: Make sure [[Python]] is installed on your system. You can download it from [[[python]].org](https://www.[[[[python]]]].org/downloads/).
    
- **AWS Account**: You'll need an AWS account and access to AWS IoT Core. Set up your IoT device in the AWS IoT Core console and note your IoT endpoint.
    
- **[[Security]] Credentials**: Download the root CA certificate, and your device's certificate and private key from AWS IoT Core. These are required for the MQTT client to authenticate with AWS IoT Core.
    

### Installation

1. **Clone the Repository** (Skip this step if you have received the script by other means):
    
    bashCopy code
    
    `git clone <repository-url> [[cd]] <repository-folder>`
    
2. **Create a Virtual Environment (Optional but Recommended)**:
    
    - On macOS/Linux:
        
        bashCopy code
        
        `python3 -m venv venv source venv/bin/activate`
        
    - On Windows:
        
        Copy code
        
        `python -m venv venv .\venv\Scripts\activate`
        
3. **Install Required [[Python]] Packages**:
    
    Copy code
    
    `pip install pandas AWSIoTPythonSDK`
    

### Configuration

1. **Update Script Parameters**: Open the script in a text [[editor]] and fill in the following parameters with your specific details:
    
    - `csv_file_path`: Path to your CSV file containing the telemetry data.
    - `host`: Your AWS IoT endpoint.
    - `root_ca_path`, `certificate_path`, `private_key_path`: Paths to your downloaded AWS IoT [[security]] credentials.
2. **MQTT Topic Configuration**: Ensure the MQTT topic specified in the script (`$aws/things/your_thing_name/shadow/update/documents`) matches your desired topic in AWS IoT Core. Adjust as necessary.
    

### Running the Script

To run the script, use the following command in your terminal or command prompt, making sure you are in the project directory and your virtual environment is activated:

phpCopy code

`[[python]] <script-name>.py`

Replace `<script-name>.py` with the actual name of your [[Python]] script file.

## Troubleshooting

- **MQTT Connection Issues**: Ensure your AWS IoT endpoint and [[security]] credentials are correct. Check your device's policy in AWS IoT Core to ensure it has permission to publish to the specified topic.
    
- **CSV Parsing Errors**: Verify the format of your CSV file, including headers and data structure. Adjust the script's reading logic if your CSV format differs from expected.
    

For further assistance, consult the AWS IoT Core documentation or reach out to your AWS support representative.