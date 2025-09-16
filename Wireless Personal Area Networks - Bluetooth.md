## 1. What is a WPAN?

### Definition

**Wireless Personal Area Network (WPAN)**: Technology designed for short-range communications that eliminates the need for cables to interconnect multiple devices.

### Applications

- **[[Internet of Things]] (IoT)**
- **Wearable devices**: Smartwatches, fitness trackers
- **[[Home]] automation**: Smart [[home]] systems
- **Body sensors**: Health monitoring devices
- **Industry automation**: Factory and [[process]] control

### Key Standards

- **[[Bluetooth]]**: 802.15.1
- **Zigbee**: 802.15.4

### Standards Organizations

- **OSI**: Open System Interconnection
- **IEEE**: Institute of Electrical and Electronics Engineers
- **Industry consortiums** vs **IEEE standards**

---

## 2. WPAN Design Challenges

### Core Problems

- **Simplicity**: Easy setup and use
- **Multiple node connectivity**: Multiple access and interference management
- **Network topology**: Effective node connection organization
- **Power efficiency**: Battery life and low power features
- **[[Security]]**: [[Data]] protection and [[authentication]]

---

## 3. [[Bluetooth]] (802.15.1) Fundamentals

### Basic Specifications

- **Operating frequency**: 2.4 GHz ISM band
- **Standards body**: [[Bluetooth]] Special Interest Group (SIG)
- **IEEE standard**: 802.15.1 (approved March 2, 2002)
- **Wi-Fi compatibility**: Ensures interoperability in 2.4 GHz band

### Evolution Path

- **Traditional [[Bluetooth]]**: Original specifications
- **[[Bluetooth]] Low Energy (BLE)**: Version 4.x
- **Enhanced versions**: Version 5.x
- **Latest**: Version 6.x

---

## 4. [[Bluetooth]] Classes and Range

### Device Classes (by power and range)

|[[Class]]|Power [[Output]]|Typical Range|
|---|---|---|
|**[[Class]] 1**|100 mW (20 dBm)|~100 meters|
|**[[Class]] 2**|2.5 mW (4 dBm)|~10 meters|
|**[[Class]] 3**|1 mW (0 dBm)|~1 meter|

---

## 5. [[Bluetooth]] Protocol Stack

### 5.1 Radio Frequency Layer

**Frequency Specifications**:

- **Band**: 2.4 GHz ISM
- **Modulation**: GFSK (initially), 8DPSK
- **Channels**: 79 different channels
- **Channel spacing**: 1 MHz apart
- **Multiple access**: FHSS (Frequency Hopping Spread Spectrum)

### 5.2 Frequency Hopping Spread Spectrum (FHSS)

**Characteristics**:

- **Adaptive FH**: Master selects hopping channels adaptively
- **Hopping level**: Packet-level (not symbol-level)
- **Hopping rate**: 1600 hops per second
- **Pattern**: Unique per piconet, determined by master's [[MAC address]] and clock

### 5.3 Baseband Layer

**Functions**:

- **Physical channel management**: Controls radio links
- **Packet handling**: [[Data]] transmission and reception
- **Device discovery**: Paging and inquiry procedures
- **Synchronization**: Clock and hopping pattern coordination

---

## 6. Network Topology

### 6.1 Piconet Structure

**Master-Slave Architecture**:

- **Master**: One device controls the piconet for its lifetime
- **Slaves**: Up to 7 active slaves per piconet
- **Role swapping**: Master and slave can exchange roles
- **Communication**: Alternating transmission between master and slaves

**Synchronization Requirements**:

- **Hopping pattern**: Determined by master's [[MAC address]] and clock
- **Slave synchronization**: Must sync to master's hopping sequence
- **Participation criterion**: Synchronization = piconet membership

### 6.2 Scatternet Structure

**Multi-piconet Networks**:

- **Coverage**: Multiple piconets can cover same area
- **Unique codes**: Each piconet uses different FH code
- **Device roles**:
    - Can be slave in multiple piconets
    - Can be master in only one piconet
- **Address management**: Must use specific piconet's master address and clock

---

## 7. [[Bluetooth]] Connection Procedure

### 7.1 Device Discovery (Inquiry)

**[[Process]]**:

- **Purpose**: Discover nearby [[Bluetooth]] devices
- **Automation**: Automatic without user intervention
- **Range**: Within radio communication range

### 7.2 Connection Establishment (Paging)

**Pairing [[Process]]**:

- **[[Authentication]]**: Requires pairing code [[input]]
- **Connection [[maintenance]]**: Periodic paging messages from master
- **Link establishment**: Creates active communication channel

---

## 8. [[Bluetooth]] Frame Structure

### Frame Components (3 parts)

**Access Code (72 bits)**:

- Timing synchronization
- Paging procedures
- Inquiry procedures

**Header (54 bits)**:

- Packet acknowledgment
- Packet numbering
- Slave address [[identification]]
- Payload type specification
- Error checking

**Payload (0-2745 bits)**:

- [[Data]] transmission
- Voice transmission
- Combined [[data]]/voice

---

## 9. Link Manager Layer

### 9.1 Core Functions

**Piconet Management**:

- Device coordination
- Resource allocation
- Traffic control

**[[Security]] Management**:

- [[Authentication]] procedures
- [[Encryption]] key management
- [[Security]] policy enforcement

### 9.2 Link Types

**Synchronous Connection-Oriented (SCO)**:

- **Type**: Symmetric point-to-point
- **Participants**: Master and single slave
- **Primary use**: Voice transmission
- **Characteristics**: Real-time, circuit-switched

**Asynchronous Connectionless (ACL)**:

- **Type**: Packet-switched
- **Primary use**: [[Data]] transmission
- **Characteristics**: Best-effort delivery, variable latency

---

## 10. Power Management States

### Device Power States

**Active [[State]]**:

- **Participation**: Actively participates in channel
- **Power consumption**: Highest
- **Functionality**: Full communication capability

**Sniff [[State]]**:

- **Operation**: Slave listens at reduced rate
- **Power savings**: Moderate
- **Responsiveness**: Reduced but maintained

**Hold [[State]]**:

- **Operation**: Only internal timer running
- **Communication**: Suspended
- **Power savings**: Significant

**Park [[State]]**:

- **Participation**: No participation in most traffic
- **Capacity**: Up to 255 parked slaves
- **Limitation**: Cannot transmit immediately when needed
- **Power savings**: Maximum

---

## 11. [[Bluetooth]] Evolution

### 11.1 [[Bluetooth]] 4.x (BLE Introduction)

**Key Features**:

- **[[Bluetooth]] Low Energy (BLE)**: Significant power [[reduction]]
- **Dual-mode support**: Classic + BLE
- **IoT enablement**: Suitable for IoT applications
- **Extended battery life**: Months to years operation

### 11.2 [[Bluetooth]] 5.x

**Enhancements**:

- **Increased range**: 4x range improvement
- **Higher speed**: 2x speed improvement
- **Message capacity**: 8x advertising message capacity
- **Improved coexistence**: Better Wi-Fi coexistence

### 11.3 [[Bluetooth]] 6.0 (August 2024)

#### Major Focus Areas

- **[[Security]] enhancements**
- **Efficiency improvements**
- **Latency [[reduction]]**
- **Advanced device interaction**

#### Key Features

**Channel Sounding (Accurate Fine-Ranging)**:

_Method 1: Phase-Based Ranging (PBR)_

- Uses phase shifts across multiple frequencies
- Distance calculation formula: involves frequency difference (f1-f2), phase difference (Pf1-Pf2), and speed of light
- Initiator sends signal, reflector echoes, distance calculated

_Method 2: Round-Trip Timing (RTT)_

- Measures packet round-trip time
- Adjusts for processing delay
- Time of Departure (ToD) and Time of Arrival (ToA) timestamps
- Combined with PBR for accuracy and [[security]]

**[[Decision]]-Based Advertising Filtering (DBAF)**:

- Scanner checks primary-channel advertising content before chasing auxiliary [[data]]
- Reduces "distractions" in dense environments
- Enhanced scanning efficiency

**Monitoring Advertisers**:

- Monitor when specific devices appear/leave range
- Avoid [[constant]] scanning for power conservation
- Host notification when device returns to range
- Ideal for BLE audio workflows

**ISOAL Enhancements**:

- Lower latency for streaming applications
- Better reliability for audio/video transmission

**[[Link Layer]] Extended Feature Set**:

- Enhanced capability negotiation
- More flexible device interaction

**Frame Space Update**:

- Configurable inter-packet timing
- Optimized for specific applications

---

## 12. [[Security]] in [[Bluetooth]] WPANs

### 12.1 [[Security]] Mechanisms

**[[Authentication]]**:

- **Basis**: Device [[identification]]
- **Method**: Challenge-response strategy
- **Purpose**: Verify device identity

**[[Encryption]]**:

- **[[Process]]**: [[Data]] scrambling using mathematical algorithms
- **Purpose**: Prevent easy interception and decoding

### 12.2 [[Encryption]] Modes

**Mode 1**: No [[encryption]]

- All traffic transmitted in clear text
- No [[security]] protection

**Mode 2**: Selective [[encryption]]

- Traffic from master to single slave encrypted
- Traffic from master to multiple slaves not encrypted
- Partial [[security]] coverage

**Mode 3**: Full [[encryption]]

- All traffic encrypted
- Maximum [[security]] protection

### 12.3 [[Security]] Levels

**Level 1**: No [[security]]

- Open communication
- No [[authentication]] or [[encryption]]

**Level 2**: Service-level [[security]]

- [[Security]] applied at application/service layer
- Selective protection

**Level 3**: Link-level [[security]]

- [[Security]] applied at [[link layer]]
- Comprehensive protection

---

## Key Takeaways

1. **WPAN technologies** enable short-range wireless [[Communication]] for IoT and personal devices
2. **[[Bluetooth]] architecture** uses master-slave piconets with FHSS for multiple access
3. **Network topology** supports piconets (up to 8 devices) and scatternets (multiple piconets)
4. **Power management** includes multiple states for battery optimization
5. **Evolution path** from traditional [[Bluetooth]] → BLE → enhanced versions → [[Bluetooth]] 6.0
6. **[[Bluetooth]] 6.0** introduces channel sounding, [[decision]]-based filtering, and monitoring capabilities
7. **[[Security]] features** include [[authentication]] and [[encryption]] with multiple modes and levels

## Technology Progression

- **802.15.1**: Original [[Bluetooth]] standard
- **Version 4.x**: BLE introduction
- **Version 5.x**: Range, speed, capacity improvements
- **Version 6.0[[[[Security]]|**: [[Security]], efficiency, and advanced interaction features