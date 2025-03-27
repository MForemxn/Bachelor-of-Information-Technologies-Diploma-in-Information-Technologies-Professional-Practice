# IPS

**Intrusion Prevention Systems (IPS)** are advanced [[security]] solutions designed to not only detect but also prevent unauthorized access or malicious activities within a network. They build upon the capabilities of Intrusion Detection Systems ([[IDS]]) by actively blocking or mitigating threats in real-time.

## Sensor (Agent)
In an IPS, sensors play a crucial role in continuously monitoring network traffic or host activities. They are responsible for detecting suspicious patterns or behaviours that may indicate a potential threat.

- Continuously monitors network or host activities.
- Detects suspicious patterns or behaviours.
- Serves as the initial detection point in an IPS.

## Analyser (Detector)
The analyser in an IPS [[processes]] the [[data]] collected by sensors to identify potential threats. It uses sophisticated algorithms to detect anomalies or match known attack signatures, determining the severity of the threat.

- [[Processes]] sensor [[data]] to identify threats.
- Utilises advanced algorithms for detection.
- Assesses the severity of potential threats.

## [[Decision]] Engine
The [[decision]] engine in an IPS evaluates the analyser's findings and determines the appropriate response. Unlike [[IDS]], an IPS can take proactive measures, such as blocking traffic, terminating connections, or applying patches to prevent intrusions.

- Evaluates analyser findings to decide on actions.
- Can block traffic or terminate connections.
- Applies patches or updates to prevent threats.

IPS systems are essential for proactive network [[security]], providing real-time threat prevention and ensuring the [[integrity]] and [[availability]] of [[information systems]].