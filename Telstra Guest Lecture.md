# Telstra Mobile Network Overview 2025

## Network Facts and Figures

### Telstra's Network Scale

- **Coverage Area:** Over 3 million km² (1 million km² more than competitors)
- **Population Coverage:** 99.7%
- **Land Mass Coverage:** 38% (terrestrial mobile network)
- **Mobile Base Stations:** 11,800 total
    - **[[LTE/4G|4G]]-enabled sites:** 11,800+
    - **[[NR/5G|5G]]-enabled sites:** 6,000+
- **[[NR/5G|5G]] Coverage:** 500+ cities and towns

### Network Usage Statistics (2024)

- **Daily [[Data]]:** 8.9 petabytes consumed via mobile devices (June 2024)
- **Daily Voice Calls:** 60 million (early 2023)
- **Daily SMS:** 40 million (early 2023)

### Global Context Comparison

|Country/Region|Operators|[[Mobile Services]]|Base Stations|Pop Coverage|
|---|---|---|---|---|
|**China**|China Mobile, China Telecom, China Unicom|~1.68 billion|~10.6 million|99.6%|
|**India**|Reliance Jio, Bharti Airtel, Vodafone Idea|~1.15 billion|~2.4 million|99.3%|
|**USA**|AT&T, Verizon, T-Mobile|~360 million|~500,000|99.8%|
|**Australia**|Telstra, Optus, TPG|-|11,800+ (Telstra)|99.7% (Telstra)|

---

## Radio and Spectrum Fundamentals

### What is Radio?

- **Definition:** Release of electrical and magnetic fields into space via antenna from alternating current
- **Field Characteristics:** Electrical and magnetic fields travel perpendicular to each other
- **Propagation:** Travels through air/space without wires, can cover long distances
- **Signal Strength:** Follows [[Inverse Square Law]] - strength declines proportional to square of distance

### Electromagnetic Fields

- **Current Flow:** Generates associated electrical and magnetic fields
- **Electrical Fields:** Flow perpendicular to current direction
- **Magnetic Fields:** Flow circular to current direction
- **[[Faraday's Law]]:** Magnetic field can induce current in conductor and vice versa

### Spectrum Overview

- **Definition:** Range of radio frequencies from DC (0 Hz) to visible light (400-800 THz) and beyond
- **Carrier Frequency:** Fundamental characteristic allowing signal differentiation
- **Bandwidth:** Wider signal bandwidth required for more information/higher transmission speeds

### Spectrum Bands and Applications

|Frequency Range|Application|Notes|
|---|---|---|
|**702 kHz**|[[AM Radio]]|ABC 702|
|**102 MHz**|[[FM Radio]]|FM 102|
|**100-200 MHz**|[[VHF TV]]|ABC, SBS, 7, 9, 10|
|**600 MHz**|[[UHF TV]]|Digital TV channels|
|**700 MHz**|[[4G Mobile]]|National coverage (Telstra, Optus)|
|**850-900 MHz**|[[Mobile Coverage]]|Various operators|
|**1.8 GHz**|[[Mobile Services]]|4G coverage|
|**2.1 GHz**|[[Mobile Services]]|4G/5G|
|**2.4-5 GHz**|[[Wi-Fi]], [[ISM Band]]|Unlicensed bands, microwave ovens|
|**2.6 GHz**|[[4G/5G Capacity]]|All major operators|
|**3.4-3.8 GHz**|[[5G Coverage]]|Mid-band spectrum|
|**26-28 GHz**|[[mmWave 5G]]|Fixed wireless, satellite services|

### Spectrum Management

- **Global Body:** [[International Telecommunications Union]] ([[ITU]])
- **Process:** [[World Radio Conference]] ([[WRC]]) - 4-yearly process
- **Timeline:** ~8 years total (4 years international allocation + 4 years national allocation)
- **Australian Authority:** [[ACMA]] (Australian Communications and Media Authority)
- **Harmonization:** Seeks global device ecosystem compatibility

### Mobile Spectrum Layer Cake

#### [[Low Band Spectrum]] (<1 GHz)

- **Frequencies:** 700, 850, 900 MHz
- **Purpose:** Wide area coverage layers
- **Characteristics:** Long range, good building penetration
- **Telstra Usage:** 700 MHz (4G), 850 MHz (transitioning from 3G to 5G)

#### [[Mid Band Spectrum]] (1-6 GHz)

- **Frequencies:** 1800, 2100, 2300, 2600, 3400-3800 MHz
- **Purpose:** Network capacity for increasing data demands
- **Telstra Usage:** 1800, 2100, 2600 MHz (4G); 3400-3800 MHz (5G)

#### [[High Band Spectrum]] (>26 GHz)

- **Frequencies:** 26 GHz and above
- **Purpose:** Extreme capacity and speed
- **Allocation:** First allocated in 2021
- **Usage:** 5G [[mmWave]] applications

---

## Network Design and Architecture

### Network Building Blocks

#### Core Components

1. **[[Antenna]]:** Transmit/receive radio waves
2. **[[Tower/Mast/Pole/Rooftop]]:** Physical mounting structure
3. **[[Radio Equipment]]:** Convert baseband signals to radio waves and vice versa
4. **[[Base Station Electronics]]:** Signal processing and control
5. **[[Shelter/Hut/Equipment Room]]:** Housing for electronics

#### Network Architecture

```
Customer Device ↔ Base Station ↔ Baseband Hotel ↔ Mobile Core ↔ Internet
                      ↓              ↓                ↓
                   Fronthaul      Backhaul     Mobile Platforms
```

### Coverage Factors

- **Distance:** [[Inverse Square Law]] affects signal strength
- **Spectrum Band:** Lower frequencies travel further than higher frequencies
- **Technology Sensitivity:** Lowest signal detection threshold
- **Obstructions:** Trees, buildings, hills affect propagation
- **[[Earth Curvature]]:** 30m tower radio horizon ~20km
- **Signal Timing Limits:** Technology-dependent constraints

### Frequency vs Coverage Trade-offs

|Frequency Band|Typical Coverage|Penetration|Capacity|
|---|---|---|---|
|**700 MHz**|15 km (rural), up to 200 km|Excellent building penetration|Limited (max 20 MHz)|
|**3600 MHz**|2.5-4 km|Moderate penetration|Higher capacity|
|**26 GHz ([[mmWave]])**|250-500m|Poor penetration, blocked by vegetation|Extreme capacity|

### [[Cellular Network Structure]]

- **Honeycomb Pattern:** Theoretical frequency reuse pattern
- **3-Sector Sites:** Standard configuration for coverage optimization
- **Coverage Overlap:** Contiguous coverage through overlapping cells
- **[[Small Cells]]:** Deployed in high-usage areas for local capacity enhancement

### [[Radio Access Network]] ([[RAN]]) Equipment

#### Antenna Systems

- **700, 850 MHz:** Antennas supporting existing spectrum
- **[[5G Active Antenna]]:** Supporting 3600 MHz
- **[[Remote Radio Units]]:** 1800, 2100, 2600 MHz
- **[[RF Filters]]:** Meet regulatory obligations

#### Processing Equipment

- **[[Baseband Racks]]:** Centralized RAN processing in hotels
- **[[Telco Cloud]]:** Hosting environment for Core Network

### [[Multi-user MIMO]]

- **Technology:** Multiple Input, Multiple Output
- **Benefits:** Up to 4x more network capacity, improved unit cost
- **Requirements:** Works best with [[TDD spectrum]] above 2000 MHz
- **Compatibility:** Supported by existing 4G/5G devices
- **[[TDD Spectrum Bands]]:** 2300 MHz, 3400-3800 MHz, 26 GHz

---

## Mobile Technology Evolution (2G-6G)

### Technology Progression Timeline

|Generation|Years|Key Features|Throughput|Latency|Carrier BW|
|---|---|---|---|---|---|
|**[[1G]]**|1993-2016|Voice, Messaging|90 kbps|500ms|200 kHz|
|**[[2G]]**|2005-2024|Voice, Messaging, Data|42 Mbps|100ms|5 MHz|
|**[[3G]]**|2011+|Voice, Data, Video|2 Gbps|30ms|20 MHz|
|**[[4G]]**|2019+|Efficient Capacity|2.3 Gbps|20ms|60 MHz|
|**[[5G]]**|2021+|Enhanced Mobile Broadband|4.5-6 Gbps|<10-15ms|800-1000 MHz|
|**[[6G]]**|~2030|Real-time automation|TBD|<1ms|TBD|

### 5G Core Characteristics

#### 1. [[Enhanced Mobile Broadband]]

- Significantly faster data speeds
- New applications and greater mobility connectivity
- 4K UHD & AR/VR video support

#### 2. [[Ultra-reliability and Low Latency]]

- Revolutionary industrial process applications
- Supply chain, agriculture, manufacturing improvements
- Enhanced business communications

#### 3. [[Massive Machine-to-Machine Communications]]

- Real-time control of connected devices
- Industrial robotics and facility management
- Vehicle-to-vehicle communications
- Autonomous driving and transport safety

### 5G Architecture Evolution

#### [[Non-Standalone]] ([[NSA]]) Mode (2019)

- Leverages existing [[4G Core]]
- Combines 4G and 5G spectrum
- Device defaults to 4G when idle
- 5G connection established for active data use

#### [[Standalone]] ([[SA]]) Mode (2022)

- New [[5G Core]] with complete 4G separation
- [[Service Based Architecture]] with cloud-native techniques
- Enables [[Network Slicing]], low latency, edge use cases
- Flexible [[Quality of Service]] ([[QoS]]) and improved security

### 5G Transport Network Modernization

#### [[Fronthaul]]

- **[[DWDM]]:** Passive Dense Wavelength Division Multiplexing systems
- **Packetized IP Backhaul:** Transport between baseband hotels and sites

#### [[One Edge Router]]

- 5G connectivity and services enablement
- IP connectivity for 4G Core, 5G Core, and [[Edge Compute]]
- High capacity/density support for [[mmWave]] small cells

#### [[IP Core]]

- 100/400GE optimized devices
- High capacity Edge aggregation
- [[Network Slicing]] and timing support
- High availability, low cost focus

#### Regional Infrastructure

- **[[Regional Backhaul]]:** Capacity upgrades for spectrum assets
- **[[DWDM]] Cost Reduction:** Technology cost optimization
- **[[IP Radio]]:** Higher capacity for remote sites

---

## Satellite Technologies

### Satellite Categories and Capabilities

|Orbit Type|Altitude|Latency|Coverage|Bandwidth Density|Ground Terminal|
|---|---|---|---|---|---|
|**[[GEO]]**|36,000 km|~650ms|3 satellites|10-100s kbps/km²|Parabolic antenna|
|**[[MEO]]**|1,200-20,000 km|~150ms+|Dozens|100s-1000s kbps/km²|Tracking parabolic/flat panel|
|**[[LEO]]**|Up to 1,200 km|20-70ms|Hundreds-thousands|100s-1000s kbps/km²|Tracking parabolic/flat panel|

**Note:** Mobile network bandwidth density exceeds 1,000,000 kbps/km²

### Satellite Examples

- **[[GEO]]:** Intelsat, SES, Eutelsat, Inmarsat, Viasat, NBN Skymuster
- **[[MEO]]:** SES O3b & mPower
- **[[LEO]]:** Starlink, Eutelsat OneWeb, Iridium, Amazon Kuiper (2026), Telesat (2027)

### Telstra Satellite Implementation

#### Historical Satellite Backhaul

- **[[GEO Backhaul]]:** Up to 20/1 Mbps, ~650ms latency, ~70 sites
- **[[LEO Backhaul]] (OneWeb):** Up to 75/15 Mbps, ~70ms latency, ~160 sites

### Coverage Enhancement

- **Current Terrestrial:** 3 million km² (38% land mass), 99.7% population
- **[[NB-IoT]]:** 4.9 million km² (64% land mass)
- **[[LTE-M]]:** 3.9 million km² (50% land mass)
- **Satellite Goal:** Nationwide ubiquitous outdoor coverage

### [[Direct to Handset]] ([[DTH]]) Satellite

#### Architecture Options

1. **[[Bent Pipe Model]]:** Mobile base station on ground
2. **[[Satellite Base Station]]:** Base station on board satellite

#### DTH Capabilities and Limitations

**Capabilities:**

- Extend coverage up to 100% of landmass (requires dedicated spectrum)
- Outdoor voice, messaging, and low-rate data
- Maritime and IoT connectivity

**Limitations:**

- Outdoor only - no indoor coverage
- No broadband/high-speed data capability
- May not reach 100% landmass with terrestrial spectrum (interference avoidance)

#### Telstra Launch

- **[[Satellite to Mobile Service]]:** Launched June 2025

---

## Internet of Things (IoT)

### IoT Technologies

- **[[CAT M1]]:** Category M1 LTE technology
- **[[NB-IoT]]:** Narrowband IoT technology
- **Scalability:** Can be scaled up or down based on requirements

### [[Power Saving Mode]] ([[PSM]])

- **Introduction:** 3GPP Release 12 feature
- **Function:** Allows device sleep periods for power conservation
- **Limitation:** Device cannot be paged or receive data while asleep
- **Reference:** TS 23.682 Section 4.5.4

#### PSM vs Non-PSM Device Behavior

**Non-PSM:** Continuous Active → Idle → TAU (Tracking Area Update) cycle **PSM:** Active → Idle → TAU → Extended PSM sleep period

### [[Coverage Enhancement]] ([[CE]])

- **Introduction:** 3GPP Release 13 feature
- **Improvement:** 15-20 dB improvement in [[Maximum Coupling Loss]] ([[MCL]])
- **Benefits:** Greater coverage for IoT devices in hard-to-reach locations (basements, pits)
- **Device Types:** [[Bandwidth Reduced]] ([[BR]]) or [[Bandwidth Reduced Low Complexity]] ([[BL]]) UE
- **Standards:** 3GPP TS 36.331 and associated specifications

---

## Future Technologies

### Technology Convergence Timeline

#### Last 5 Years

- Exponential data growth
- Emergence of digital capabilities
- On-premise delivery model

#### Today (Horizon One: Next 3-5 years)

- **Satellite Evolution:** GEO to LEO and [[Direct to Handset]]
- **IoT Growth:** Machine-to-machine, connected devices/sensors
- **Cloud Adoption:** Rapid growth in cloud adoption and managed services
- **Network Technologies:** 3G, 4G, 5G simultaneous operation (~5 years overlap)

#### Horizon Two (5-10 years)

- **Autonomous Devices:** Advanced autonomous systems
- **[[Edge Compute]]:** Distributed computing capabilities
- **Intelligent Networks:** Convergence of connectivity and software
- **Technology Integration:** Multiple access technology integration

### 6G Technology (Expected ~2030)

#### Development Timeline

- **Standards:** Early conceptualization in [[3GPP]] forum
- **Spectrum Work:** Feeds into [[ITU]] [[World Radio Congress]] process
- **Generation Cycle:** ~10 years between mobile technology generations
- **Overlap Period:** 4G, 5G, 6G simultaneous operation before 4G retirement

#### Expected 6G Characteristics

- **Spectrum:** 100+ GHz and [[Terahertz]] ([[THz]]) bands
- **Bandwidth:** Huge bandwidths for speed/capacity (~10x improvement over 5G)
- **Latency:** Sub-millisecond response times
- **Integration:** Multiple access technologies (possibly including [[Wi-Fi]] and satellite)
- **Deployment:** Incremental, complementary network addition

---

## Technical Appendix

### [[Modulation]] Techniques

#### Analog Methods

- **[[AM]]:** Amplitude Modulation (old AM radios)
- **[[FM]]:** Frequency Modulation (FM stations, two-way radios)

#### Digital Methods

- **[[PSK]]:** Phase Shift Keying (modems, 2G GSM)
- **[[QAM]]:** Quadrature Amplitude Modulation

#### Advanced Digital

- **[[CDMA]]:** Code Division Multiple Access (3G, military radio)
- **[[OFDM]]:** Orthogonal Frequency Division Multiplexing ([[LTE/4G]], [[NR/5G]])

### [[Quadrature Amplitude Modulation]] ([[QAM]])

- **Function:** Converts bit streams into phase/amplitude variations
- **Components:** In-Phase and Quadrature waves (90° apart)
- **Symbol Representation:** Each symbol represents multiple bits
- **Bandwidth Efficiency:** Reduces frequency range requirements

### [[Radio Duplexing]] Methods

#### [[Frequency Division Duplexing]] ([[FDD]])

**Advantages:**

- Continuous, simultaneous bidirectional communication
- Very low latency (propagation path dependent only)
- Long radio paths possible
- Works well at all frequency bands
- Suitable for satellite communications

**Disadvantages:**

- Requires larger spectrum allocations with duplex gap
- Duplex gap spectrum waste
- Lower total bandwidth than TDD
- [[Massive MIMO]] less effective (non-reciprocal paths)

#### [[Time Division Duplexing]] ([[TDD]])

**Advantages:**

- Single frequency usage
- Larger spectrum allocations possible
- Higher bandwidths on single channels (up to 100 MHz in 5G)
- Excellent [[Massive MIMO]] performance (reciprocal paths)

**Disadvantages:**

- Inherent latency from time division
- Network synchronization requirements
- Guard period requirements increase with distance
- Self-interference in geographically large networks
- Not suitable for satellite communications

---

## Summary

### Network Scale and Performance

- **Coverage Leadership:** Largest network in Australia (3M km², 99.7% population)
- **Technology Deployment:** 11,800+ base stations with 6,000+ [[NR/5G|5G]]-enabled sites
- **Usage Scale:** 8.9 petabytes daily [[Data]] consumption

### Technology Evolution

- **Current:** [[LTE/4G|4G]]/[[NR/5G|5G]] deployment with [[Standalone]] [[NR/5G|5G]] core [[Implementation]]
- **Near-term:** Enhanced [[NR/5G|5G]] capabilities, [[satellite]] integration, IoT expansion
- **Long-term:** [[6G]] development targeting 2030 deployment

### Key Strategic Elements

- **Spectrum Management:** Multi-band approach optimizing coverage and capacity
- **Network Architecture:** Cloud-native, edge-compute enabled infrastructure
- **Coverage Extension:** [[satellite]] technologies for ubiquitous outdoor coverage
- **Future Readiness:** Technology roadmap supporting emerging use cases and applications