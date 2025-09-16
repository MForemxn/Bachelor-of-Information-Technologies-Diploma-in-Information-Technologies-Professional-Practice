# Wireless Local Area Networks (WLANs) - Lecture Summary (Week 5, Chapter 6)

## WLAN Applications and Components
- Wireless networks are popular due to convenience, avoiding expensive cabling, and enabling multiple users to share a single Internet connection.
- **Wireless Residential Gateway**: Combines router, Ethernet switch, and wireless access point (AP); supports Internet and printer sharing.

### Access Points (APs)
- **Definition**: Provides wireless LAN devices access to a wired network.
- **Components**:
  - Radio transceiver
  - [[Antenna]]
  - RJ-45 wired network [[interface]] port
- **Functions**:
  - Acts as wireless communications base station.
  - Bridges wireless and wired networks.
- **Key Features**:
  - Maximum range: ~115 meters.
  - Dynamic rate selection: Automatically chooses highest [[data]] rate based on signal strength/quality.
  - User support: Generally over 100 users.
  - Power over Ethernet (PoE): Delivers DC power via unused wires in UTP Ethernet cable.

## Infrastructure and Ad Hoc Modes
### Ad Hoc Mode (Independent Basic Service Set - IBSS)
- Wireless clients communicate directly without an AP.
- Advantages: Quick and easy setup.
- Drawbacks: Clients can only communicate among themselves; limited to stations on the same radio frequency.

### Infrastructure Mode
- **Basic Service Set (BSS)**: Consists of wireless clients and one AP.
- **Extended Service Set (ESS)**: Two or more BSSs in the same area for uninterrupted mobile access (roaming).
  - All clients and APs must be part of the same network for seamless roaming.
- **[[Identifiers]]**:
  - SSID (Service Set Identifier): Identifies the ESS.
  - BSSID (Basic SSID): Identifies a specific AP.
- **Considerations**:
  - In an ESS, different APs share the same SSID; frequency, BSSID, and transmission power may differ.
  - Using two APs in separate BSSs covering one area (without ESS) leads to disconnected networks or roaming issues.

| Mode | Formal Name | Key Characteristics | Use Case |
|------|-------------|---------------------|----------|
| Ad Hoc | IBSS | Peer-to-peer, no AP | Quick temporary networks |
| Infrastructure | BSS/ESS | AP-based, supports roaming | Permanent setups with wired integration |

## IEEE 802.11 Standards
- Primarily defines MAC and PHY layers (similar to other IEEE 802.xx wireless standards).
- Upper layers (e.g., LLC) unchanged from 802.3 (Ethernet).
- PHY sublayers:
  - [[Physical Layer]] Convergence Procedure (PLCP): Reformats MAC [[data]] into PMD frames.
  - Physical Medium Dependent (PMD): Translates bits to radio signals.

### Variations of 802.11 Systems
- Reference: Wikipedia table (as of lecture; standards evolve).
- Key columns include: Frequency, Bandwidth, [[Data]] Rate, Modulation, Range.

| Standard | Frequency (GHz) | Bandwidth (MHz) | Max [[Data]] Rate (Mb/s) | Modulation | Indoor Range (m) | Outdoor Range (m) |
|----------|-----------------|-----------------|----------------------|------------|------------------|-------------------|
| 802.11 (legacy) | 2.4 | 22 | 2 | DSSS/FHSS | 20 | 100 |
| 802.11a | 5 | 20 | 54 | OFDM | 35 | 120 |
| 802.11b | 2.4 | 22 | 11 | DSSS | 35 | 140 |
| 802.11g | 2.4 | 20 | 54 | OFDM/DSSS | 38 | 140 |
| 802.11n | 2.4/5 | 20/40 | 600 | MIMO-OFDM | 70 | 250 |
| 802.11ac | 5 | 80/160 | 6933 | MIMO-OFDM | 35 | ? |
| 802.11ax (Wi-Fi 6) | 2.4/5/6 | 20-160 | 9608 | MU-MIMO/OFDM | ? | ? |
*(Simplified from lecture table; full details at https://en.wikipedia.org/wiki/IEEE_802.11)*

### IEEE 802.11b Specifics
#### PLCP
- Reformats MAC [[data]] into PMD frame.
- Frame structure: Preamble, Header, [[Data]] payload.
- Preamble: Synchronization (80 bits) + Start frame delimiter (16 bits).
- Header: Signal (8 bits, [[data]] rate), Service (8 bits), Length (16 bits), Header error check (8 bits).
- [[Data]]: Variable (16 to 65,535 μs), rates: 1, 2, 5.5, or 11 Mbps.

#### PMD
- Uses Direct Sequence Spread Spectrum (DSSS) in ISM band.
- 14 channels starting at 2.412 GHz, 5 MHz increments; each channel ~22 MHz wide (overlapping).
- Reasons for overlap: Allows channel reuse, interference management, and [[flexibility]] in deployment.
- Multi-user access: CSMA/CA (TDMA variant) per BSS.

#### MAC Layer
- LLC: Unchanged from Ethernet.
- MAC: Coordinates shared medium access.
  - Channel access methods: Distributed Coordination [[Function]] (DCF), Point Coordination [[Function]] (PCF).

## Distributed Coordination [[Function]] (DCF)
- Based on CSMA/CA (Collision Avoidance) to minimize collisions (unlike CSMA/[[CD]] which detects them).
- [[Process]]:
  - Devices sense medium; if clear, wait random backoff time (in 20μs slots) before transmitting.
  - Uses back-counting for fairness.
  - Explicit ACK after transmission to confirm receipt.
- Why random wait: Reduces collision probability when multiple devices start after medium clears.
- Enhancements:
  - **RTS/CTS**: Optional for poor networks; reserves channel, solves "hidden node" problem (overhead high for small packets).
  - **Fragmentation**: Breaks large packets to reduce collision impact.

## Point Coordination [[Function]] (PCF)
- Polling-based access (eliminates collisions).
- AP acts as polling device:
  - Listens for traffic.
  - Sends beacon frame announcing polling/contention slots.
  - Devices transmit only after AP permission.
- Designed for time-sensitive services.

| [[Function]] | Access Method | Collision Handling | Use Case |
|----------|---------------|--------------------|----------|
| DCF | CSMA/CA (contention) | Avoidance via backoff/ACK/RTS-CTS | General [[data]] |
| PCF | Polling (AP-controlled) | Elimination via sequential polling | Real-time/voice |

## Association and Reassociation
- Enables clients to join and stay connected to WLAN.
### Association
- Starts with scanning:
  - **Passive Scanning**: Client listens (~10s per channel) for AP beacon frames (includes SSID/BSSID; SSID may be hidden).
  - **Active Scanning**: Client sends probe frames; waits for responses (must include SSID).
- Associate Request: Client sends capabilities/supported rates.
- Associate Response: AP sends status code and client ID; connection established if match.

### Reassociation
- For roaming: Client drops old AP, connects to new one.
- [[Process]]: Reassociation request to new AP → Response → New AP notifies old AP (disassociation frame).
- Required when moving beyond one AP's coverage in ESS.

## MAC Frames
- Three types for different purposes:
  - **Management Frames**: Setup initial communications (e.g., beacons, probes, association).
  - **Control Frames**: Assist [[data]] delivery (e.g., ACK, RTS/CTS).
  - **[[Data]] Frames**: Carry payload to destination.
- Purpose of separation: Efficient handling of setup, control, and [[data]] transmission in shared medium.

## Summary
- WLANs: Components (APs, gateways), modes (ad hoc/infrastructure).
- 802.11(b): PHY (PLCP/PMD with DSSS, channels), MAC (DCF/PCF).
- Access: CSMA/CA, polling; association for connection/roaming.
- Frames: Management, control, [[data]] for structured communication.
## 📖 Overview

- Focus: **IEEE 802.11 [[WiFi]] standards**
    
- Goals:
    
    - Understand why and how [[WiFi]] standards evolve
        
    - Compare major differences between versions
        
    - Explore backward compatibility mechanisms
        
    - [[Review]] **OFDM, MIMO, OFDMA, QAM, MU-MIMO, MLO**
        

---

## 🔄 Evolution of [[WiFi]] Standards

|Standard|Year|Frequency Bands|Bandwidth|Key Features|
|---|---|---|---|---|
|**802.11b**|1999|2.4 GHz|DSSS|11 Mbps|
|**802.11a**|1999|5 GHz (U-NII)|20 MHz|OFDM, more channels, shorter range|
|**802.11g**|2003|2.4 GHz|20 MHz|OFDM + backward compatibility with 11b|
|**802.11n ([[WiFi]] 4)**|2009|2.4 & 5 GHz|20/40 MHz|MIMO, channel bonding, up to 600 Mbps|
|**802.11ac ([[WiFi]] 5)**|2014|5 GHz|80/160 MHz|MU-MIMO, 256-QAM|
|**802.11ax ([[WiFi]] 6)**|2019|2.4 & 5 GHz|160 MHz|OFDMA, MU-MIMO (UL/DL), 1024-QAM|
|**802.11be ([[WiFi]] 7)**|2024|2.4, 5 & 6 GHz|320 MHz|MLO, 4096-QAM, expanded OFDMA/MU-MIMO|

---

## 📡 IEEE 802.11a

- Same **MAC layer** as 802.11b, but different **PHY layer**.
    
- Uses **U-NII 5 GHz band**.
    
- **OFDM** modulation (vs DSSS in 802.11b).
    
- Better error correction.
    
- 23 channels (20 MHz wide, 52 subcarriers).
    
- **Shorter range** but **higher capacity**.
    

---

## 🌀 OFDM (Orthogonal Frequency Division [[Multiplexing]])

- Divides spectrum into many orthogonal subcarriers.
    
- No guard band needed → **higher spectral efficiency**.
    
- Resistant to multipath interference.
    
- Implemented via **DFT (Discrete Fourier Transform)**.
    

---

## 🔢 QAM ([[Quadrature Amplitude Modulation]])

- Combination of **PSK** (phase) + **ASK** (amplitude).
    
- Represents bits as complex values in a constellation.
    
- Higher-order QAM = higher throughput, but lower noise tolerance.
    

---

## 📡 IEEE 802.11g

- Operates in **2.4 GHz** band.
    
- Backward compatible with 11b.
    
- Mandatory support: 1, 2, 5.5, 11 Mbps (DSSS) + OFDM mode.
    
- Reuses PLCP frame format from 802.11b.
    

---

## 📶 IEEE 802.11n ([[WiFi]] 4)

- **MIMO (Multiple [[Input]] Multiple [[Output]])**
    
    - Spatial diversity: combats fading.
        
    - Beamforming: increases SNR.
        
    - Spatial [[multiplexing]]: higher [[data]] rates.
        
- Supports up to **4 Tx / 4 Rx antennas**.
    
- Works on both **2.4 & 5 GHz**.
    
- **Channel bonding** → 40 MHz (300–600 Mbps).
    
- Guard intervals to prevent ISI.
    
- Frame aggregation to boost throughput.
    
- 4 operating modes for **backward compatibility**.
    

---

## ⚡ IEEE 802.11ac ([[WiFi]] 5)

- **5 GHz only**.
    
- Wider channels: up to **160 MHz**.
    
- Supports **256-QAM**.
    
- Introduced **MU-MIMO** (multi-user, simultaneous transmissions).
    
- Backward compatible with **802.11a/n**.
    

---

## 📡 IEEE 802.11ax ([[WiFi]] 6)

- Operates on **2.4 & 5 GHz**.
    
- Wider channels: up to **160 MHz**.
    
- Higher modulation: **1024-QAM**.
    
- **OFDMA** (subcarrier [[multiplexing]] for multiple users).
    
- **MU-MIMO** in both uplink & downlink.
    
- Backward compatible with **a/b/g/n/ac**.
    

---

## 🚀 IEEE 802.11be ([[WiFi]] 7)

- Operates on **2.4, 5 & 6 GHz**.
    
- Up to **320 MHz channels**.
    
- **4096-QAM (4K-QAM)** → extremely high throughput.
    
- **MLO (Multi-Link Operation)**:
    
    - Uses multiple frequency bands simultaneously.
        
    - Reduces latency & increases throughput.
        
- Expanded **OFDMA & MU-MIMO**.
    
- Backward compatible with **all previous standards**.
    

---

## 📝 Key Takeaways

- **[[OFDM]]** is the foundation of modern [[WiFi]].
    
- **Channel bonding** and **wider bandwidths** drive higher speeds.
    
- **Backward compatibility** is critical for adoption.
    
- Newer standards add:
    
    - Higher-order **[[QAM]]**
        
    - **MIMO / MU-MIMO**
        
    - **OFDMA** for efficiency
        
    - **MLO** in [[WiFi]] 7