## [[RFID]] (Radio Frequency [[Identification]])

### Overview

- **Definition**: Technology using radio waves to automatically identify and track tags attached to objects
- **Standards**: Established by EPCglobal Inc. for real-time automatic [[identification]]
- **Applications**: Can be attached to almost anything - pallets, vehicles, assets, personnel, luggage, laundry, people, livestock, pets

### System Components

#### 1. Electronic Product Code (EPC)

- **Purpose**: Standardized numbering scheme for unique [[identification]]
- **Length**: 64 or 96 bits
- **Format**: Hexadecimal notation
- **[[Function]]**: Programmed into tags and attached to physical products for electronic [[identification]]

#### 2. Tags

**Active Tags:**

- Battery powered with memory, radio, and circuitry
- Transmits radio signals
- High read range (up to 1km)

**Passive Tags:**

- No battery - powered by reader
- Reflects radio signals from reader
- Uses inductive or magnetic coupling
- Shorter read range (10cm - 5m)

**Semi-Active Tags:**

- Battery powered for circuit activation only
- Reflects radio signals from reader
- Used for notifications (e-Tags)

**Chipless Tags (RF Fibers):**

- 1-bit tags
- Most basic type

**Smart Labels:**

- Flexible [[RFID]] tag packages

**Sensory Tags:**

- Equipped with environmental sensors
- Can monitor tampering attempts
- Memory varies from 16 bits to hundreds of kilobits

#### 3. Tag Classes

Four classes exist with different capabilities and costs (specific details vary by application)

#### 4. Readers (Interrogators)

- Connect to company networks
- Transfer [[data]] from tags to computers
- Some can write [[data]] to tags
- Provide energy to activate passive tags
- Read distance determined by tag/reader antenna size, location, and power transmission

#### 5. Antennas

**Tag Antennas:**

- Size limited by tag dimensions
- **Linear**: Greater range, less accurate reads
- **Circular**: Greater accuracy, limited range, better for varying orientations

**Reader Antennas:**

- Larger antennas = greater read distances
- Higher frequency = smaller wavelength = smaller antenna size
- Design specific to application requirements

#### 6. Software Components

**System Software:**

- Controls hardware functions
- Implements [[communication]] protocols
- Controls [[data]] flow between tags and readers

**Middleware:**

- Reformats [[data]] from readers to business applications

**Business Application Software:**

- [[Processes]] orders, inventory, shipments, invoices

### Operating Frequencies

- **LF (Low Frequency)**: 135 kHz
- **HF (High Frequency)**: 13.56 MHz
- **UHF (Ultra High Frequency)**: 433 MHz, 860-930 MHz
- **Microwave**: 2.4 GHz and 5.8 GHz

### How [[RFID]] Works

#### [[Physical Layer]] (PHY)

**Coupling Types:**

- **Inductive/Magnetic Coupling**: For tags touching antenna surface or inserted in reader slots
- **Backscatter Coupling**: For tags readable at 3.3-330 feet distance

**Signal Characteristics:**

- **Continuous Wave (CW)**: Unmodulated sine wave supplying power to tags
- **Backscatter Modulation**: Based on ASK or ASK+PSK combination
- **[[Communication]]**: Always half-duplex to prevent interference
- **Modulation**: 10% to 100% amplitude variation

**Advanced Features:**

- Frequency Hopping Spread Spectrum (FHSS)
- Direct Sequence Spread Spectrum (DSSS)
- Used in dense interrogator environments

#### [[Communication]] Protocols

**HF Tag [[Communication]]:**

- **Protocol**: Slotted Terminating Adaptive Collection (STAC)
- **Method**: Tags reply in randomly selected time slots
- **Slot Management**: Interrogator controls slot timing and count (always power of two)

**UHF Tag [[Communication]]:**

- **Standard**: Generation 2 (Gen2) protocols
- **Three Techniques**:
    1. Reader selects tags using bit mask isolation
    2. Reader inventories tags through repetitive isolation
    3. Reader accesses individual tags when EPC is known

#### Tag [[Identification]] Layer

**Three Management Methods:**

1. **Select**: Commands to select particular segments
2. **Inventory**: Query commands for one-tag-at-a-time information
3. **Access**: Commands to single or multiple tags

**Minimum Tag Memory Contents:**

- Electronic Product Code (EPC)
- 16-bit Cyclic Redundancy Check (CRC)
- Destroy password (permanently disables tag when transmitted)

#### Collision Handling

**Tag Collisions:**

- **LF**: No collision handling mechanism
- **UHF**: Uses VerifyID command with EPC, CRC, destroy password verification
- **HF**: Uses EPC, CRC, destroy password to calculate slot numbers for replies

**Reader Collisions:**

- Detected when no replies received
- Random backoff period implemented

---

## [[NFC]] (Near Field [[Communication]])

### Overview

- **Definition**: Short-range wireless connectivity technology for smartphones and tablets
- **Standards**: Based on ISO 18092 [[RFID]] and ISO 21481 (NFCIP-2)
- **Range**: Minimum 1.6 inches between devices
- **[[Data]] Rate**: 106 to 424 Kbps
- **Configuration**: Little to no user configuration required - automatic connection

### Applications

- MasterCard PayPass and Visa payWave transactions
- Electronic discount coupons
- Business card, schedule, and map exchange
- File transfers (images, videos)
- Debit/prepaid card transactions
- Electronic public transport tickets
- Airline tickets
- [[Bluetooth]] device pairing without PIN entry

### [[NFC]] Tags and Devices

**Tag Types:**

- Four different types defined in specifications
- Different purposes with varying frame formats, speeds, encoding methods
- Storage capacity: 48 bytes to 32 KB

**Device Requirements:**

- [[NFC]]-capable device in Poll mode must first identify tag/device types within range

### Operation Modes

- **Listen Mode**: Initial device mode
- **Poll Mode**: Probes for other devices within range
- **Reader/Writer Mode**: [[NFC]] device in Poll mode acts as interrogator
- **Card Emulator Mode**: [[NFC]] device in Listen mode acts as smart card
- **Initiator Mode**: Poll mode device changes protocol to communicate with another device
- **Target Mode**: Device becomes target of initiator using half-duplex mode

### [[NFC]] Communications

**Technical Specifications:**

- **Frequency**: 13.56 MHz unlicensed band
- **Modulation**: ASK or ASK+PSK combination
- **Modulation Range**: 10% to 100%
- **Protocol**: [[Data]] Exchange Protocol ([[NFC]]-DEP) for device-to-device transfer

---

## Future Trends

### Key Advancements (2025)

- **Increased Range and Speed**: Extended operational distances and faster [[data]] transfer
- **Improved Power Efficiency**: Longer battery life and better energy management
- **Advanced [[Security]] Features**: Enhanced [[encryption]] and [[authentication]]
- **5G and IoT Integration**: Seamless connectivity with next-generation networks
- **Smart Labels and Tags**: More intelligent and responsive tag systems

### Benefiting Sectors

**Retail and E-commerce:**

- Smart shelves and automated checkouts
- Personalized shopping experiences

**Healthcare and Medical:**

- Patient tracking and medical device management

**Logistics and Supply Chain:**

- Real-time inventory and shipment tracking

**Transportation and Smart Cities:**

- Public transport integration and urban infrastructure

### Challenges and Opportunities

**Challenges:**

- [[Security]] and privacy concerns
- Standardization issues across different implementations

**Opportunities:**

- Improved battery life technologies
- Enhanced [[data]] [[security]] protocols
- Real-time analytics capabilities
- Increasing indispensability across industries

---

## Summary

- **[[RFID]]**: Electronic transponder technology storing information in tags with components including tags, readers, antennas, software, and EPCglobal [[network services]]
- **[[Communication]] Methods**: Coupling or backscatter communications using Generation 2 protocols
- **[[NFC]]**: Enables short-distance device [[communication]] with higher [[data]] rates and greater information capacity compared to traditional [[RFID]]
- **Future**: Both technologies expected to see significant growth with improved [[security]], range, and integration capabilities