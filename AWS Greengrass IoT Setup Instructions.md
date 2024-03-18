## Step 1: Register a Greengrass core device

Greengrass core devices are AWS IoT things. Enter a thing name to be used to create a Greengrass core device.

Core device name

The name of the AWS IoT thing to create. We generated the following name for you.

The name can be up to 128 characters. Valid characters: a-z, A-Z, 0-9, underscore (_), and hyphen (-).

## Step 2: Add to a thing group to apply a continuous deployment

Add your Greengrass core device to an AWS IoT thing group. If the thing group has an active Greengrass deployment, your new core device receives and applies the deployment when you finish the setup process. To deploy to only the core device, select No group.

Thing group

Enter a new group nameSelect an existing groupNo group

Thing group name

The name of the AWS IoT thing group to create. We generated the following name for you.

The name can be up to 128 characters. Valid characters: a-z, A-Z, 0-9, underscore (_), and hyphen (-).

## Step 3: Install the Greengrass Core software

Operating System

Linux

Windows

**Step 3.1: Install Java on the device**

The AWS IoT Greengrass Core software runs on Java. Follow instructions to install the Java runtime on the device. [Learn more](https://docs.aws.amazon.com/console/greengrass/v2/install-java-runtime) 

**Step 3.2: Configure AWS credentials on the device**

The Greengrass installer uses AWS credentials to provision the AWS resources that it requires. You can provide credentials as environment variables. Copy the command below to your device's terminal. Replace the text after the '=' sign with the specified information. [Learn more](https://docs.aws.amazon.com/console/greengrass/v2/configure-aws-credentials) 

```
export AWS_ACCESS_KEY_ID=<AWS_ACCESS_KEY_ID>
export AWS_SECRET_ACCESS_KEY=<AWS_SECRET_ACCESS_KEY>
export AWS_SESSION_TOKEN=<AWS_SESSION_TOKEN>
```

**Step 3.3: Run the installer**

AWS IoT Greengrass provides an installer that you can use to set up a Greengrass core device in a few minutes. The installer runs on the device and does the following:

1. Provisions the Greengrass core device as an AWS IoT thing with a device certificate and default permissions. [Learn more](https://docs.aws.amazon.com/console/greengrass/v2/provision-greengrass-core) 
2. Creates a system user and group, ggc_user and ggc_group, that the software uses to run components on the device.
3. Connects the device to AWS IoT.
4. Installs and runs the latest AWS IoT Greengrass Core software as a system service.

Download the installer

Run the following command on the device to download the AWS IoT Greengrass Core software.

```
curl -s https://d2s8p88vqu9w66.cloudfront.net/releases/greengrass-nucleus-latest.zip > greengrass-nucleus-latest.zip && unzip greengrass-nucleus-latest.zip -d GreengrassInstaller
```

Run the installer

The AWS IoT Greengrass Core software is a JAR file that installs the software when you run it for the first time. Run the following command on the device.

```
sudo -E java -Droot="/greengrass/v2" -Dlog.store=FILE -jar ./GreengrassInstaller/lib/Greengrass.jar --aws-region ap-southeast-2 --thing-name GreengrassQuickStartCore-18e4f8336d2 --thing-group-name GreengrassQuickStartGroup --component-default-user ggc_user:ggc_group --provision true --setup-system-service true --deploy-dev-tools true
```

The installation process takes a few minutes. When the installer completes, you can find your device in the list of Greengrass core devices on the **Core devices** page. If the installation fails or you can't see the device, you can troubleshoot the issue and try again. [Learn more](https://docs.aws.amazon.com/console/greengrass/v2/troubleshoot-core-device-setup)   
  
This install command deploys the Greengrass Command Line Interface (CLI) to your device. You can use the Greengrass CLI to develop and debug components on your core device. [Learn more](https://docs.aws.amazon.com/console/greengrass/v2/use-greengrass-cli)