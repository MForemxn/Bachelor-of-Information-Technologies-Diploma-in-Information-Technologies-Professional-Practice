# IDS

**Intrusion Detection Systems** (IDS) are critical components in [[cybersecurity]], designed to monitor and analyse network traffic for signs of unauthorized access or malicious activity. They play a vital role in identifying potential threats and alerting [[security]] personnel to take appropriate action.

## Sensor (Agent)
Sensors are the [[data]] collection points within an IDS. They gather information from network traffic or host activities, looking for anomalies or suspicious patterns that may indicate an intrusion attempt.

- Collects [[data]] from network or host activities.
- Monitors for unusual patterns or behaviours.
- Acts as the first line of detection in an IDS.

## Analyser (Detector)
The analyser is responsible for processing the [[data]] collected by sensors. It uses various algorithms to detect potential intrusions by identifying deviations from normal behaviour or matching known attack signatures.

- [[Processes]] [[data]] from sensors to identify threats.
- Utilises algorithms for anomaly and signature detection.
- Determines the likelihood of an intrusion.

## [[Decision]] Engine
The [[decision]] engine evaluates the results from the analyser and decides on the appropriate response. It can trigger alerts, log events, or initiate automated responses to mitigate potential threats.

- Evaluates analyser findings to determine responses.
- Triggers alerts or logs events for further analysis.
- Can initiate automated defence mechanisms.

IDS systems are essential for maintaining the [[security]] and [[integrity]] of [[information systems]] by providing early detection of potential threats and enabling timely responses.