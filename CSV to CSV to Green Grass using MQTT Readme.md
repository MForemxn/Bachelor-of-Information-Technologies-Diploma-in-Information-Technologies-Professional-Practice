# What is it?
This is a very simple script to pull data from a CSV file, and publish it to a AWS Green Grass server using the MQTT communications protocol. 

# Dependencies
Heavily relies on the AWSIoTPythonSDK.MQTTLib library for python. 

# How to Use
### Step 1: Verify and Update Certificates and Endpoint Information

First, ensure that all the paths to your certificates and your AWS IoT Core endpoint are correct and updated in your script. You mentioned that the paths might not be correct, so here's a checklist:

- **AWS IoT Core endpoint**: Confirm the endpoint `host = "avcujj6p3fbtu-ats.iot.us-east-1.amazonaws.com"` is correct for your AWS IoT Core instance. You can find this in the AWS IoT Core console under **Settings**.
    
- **Root CA file**: Verify the path to the Amazon Root CA 1 certificate. If you don't have it, download it from Amazon's website. The filename you provided seems correct, but ensure the file exists at that path.
    
- **Device certificate and private key**: Confirm that the paths to your device certificate and private key are accurate and point to files that exist. These are issued by AWS IoT when you register a device (thing).
    

### Step 2: Install Required Libraries

If you haven't already, ensure the AWS IoT Device SDK for Python (`AWSIoTPythonSDK`) and `pandas` are installed in your environment. You can install them using pip:

`pip install AWSIoTPythonSDK pandas`

### Step 3: Validate MQTT Topic

Ensure the MQTT topic you're publishing to is correct and adheres to any policies attached to your device in AWS IoT Core. The topic in your script, `"$aws/things/mason_test_instance_Py_CSV_to_AWS_GreenGrass_using_MQTT_2/shadow/update/documents"`, is formatted as a shadow update document topic. If this is intended, ensure your device's thing shadow is configured to accept updates from this topic.

### Step 4: Check IAM Policies

Ensure the IAM role or user you're using has the necessary permissions for the actions you're trying to perform. This includes connecting to AWS IoT, publishing messages, and updating thing shadows (if using shadow topics).

### Step 5: Network Configuration

Confirm that your network allows outbound connections on port 8883, which is used for MQTT over TLS.

### Step 6: Debugging Connection Issues

If you encounter connection issues, increase the SDK's logging level to gain more insights. You've already configured basic logging, but you can get more detailed logs from the MQTT client itself:

`from AWSIoTPythonSDK.core.protocol.internal.clients import ClientStatusContainer from AWSIoTPythonSDK.core.protocol.internal.workers import EventConsumer from AWSIoTPythonSDK.core.protocol.connection.cores import ProgressiveBackOffCore  # Increase debug level ClientStatusContainer.logger.setLevel(logging.DEBUG) EventConsumer.logger.setLevel(logging.DEBUG) ProgressiveBackOffCore.logger.setLevel(logging.DEBUG)`

Place these logging level adjustments right after you configure the basic logging settings.

### Step 7: Execute the Script

Run your script in an environment where Python and the required packages are correctly installed. Monitor the output for any errors or warnings that can help troubleshoot issues.

### Step 8: Verify Data in AWS IoT Core

After successfully connecting and publishing, verify that the messages are received by AWS IoT Core. You can use the MQTT test client in the AWS IoT Core console to subscribe to the topic and see incoming messages.