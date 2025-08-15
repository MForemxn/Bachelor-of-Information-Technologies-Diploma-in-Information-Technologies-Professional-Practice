## 1. Radio Frequency Bands

### Regulated vs Unregulated Bands

- **Licensed bands**: Require government authorization for use
- **Unlicensed/Unregulated bands**: Available for public use without licensing
    - ISM bands (Industrial, Scientific, Medical)
    - Common unlicensed frequencies include 2.4 GHz, 5 GHz bands

---

## 2. Components of Radio Systems

### 2.1 Filters

**Purpose**: Remove/reduce unwanted signals from particular frequency bands

**Usage**: Both transmitter (Tx) and receiver (Rx)

**Types**:

- **Low-pass filter**: Passes frequencies below cutoff frequency
- **High-pass filter**: Passes frequencies above cutoff frequency
- **Bandpass filter**: Passes frequencies within specific range

### 2.2 Mixers

**[[Function]]**: Combine two radio frequency inputs to create single [[output]]

**[[Output]] characteristics**:

- [[Output]] range: highest sum to lowest difference of [[input]] frequencies
- Sum and differences = sidebands of frequency carrier
- Used for frequency conversion ([[input]] frequency → desired [[output]] frequency)

**Mathematical representation**:

```
If inputs are f1 and f2:
Output contains: (f1 + f2) and |f1 - f2|
```

### 2.3 Amplifiers

**Purpose**: Increase amplitude of RF signals

**Characteristics**:

- Active device (requires electrical power supply)
- Increases signal intensity/strength

**Types**:

- **Power amplifier**: Used in transmitters (Tx)
- **Low noise amplifier**: Used in receivers (Rx)

### 2.4 Antennas

**[[Function]]**: Send and receive RF signals

- Convert electrical signals to electromagnetic waves (transmission)
- Convert electromagnetic waves to electrical signals (reception)

### 2.5 Digital-to-Analog Converter (DAC)

**Purpose**: Convert finite-precision digital numbers (typically fixed-point binary) into physical quantities (voltage)

**Signal conversion**:

- Ideal signal → Practical DAC [[implementation]]
- Bridge between digital processing and analog RF transmission

---

## 3. Multiple Access Mechanisms

### Overview

**Objective**: Allow multiple users to communicate without notable interference

### 3.1 Frequency Division Multiple Access (FDMA)

**Principle**: Different users assigned different frequency bands

**Advantages**:

- No dynamic coordination necessary
- No synchronization required
- Simple [[implementation]]

**Disadvantages**:

- Bandwidth waste for uneven traffic
- Requires guard bands between channels
- Inflexible resource allocation

### 3.2 Time Division Multiple Access (TDMA)

**Principle**: Transmission time divided into slots; each user assigned entire frequency for their time slot

**Advantages**:

- Only one carrier in medium at any time
- Efficient spectrum utilization
- Flexible time allocation

**Disadvantages**:

- Requires precise synchronization
- Complex timing coordination
- Potential for collision if synchronization fails

### 3.3 Code Division Multiple Access (CDMA) - 3G Technology

**Principle**: All channels use same spectrum simultaneously, differentiated by unique codes

**[[Implementation]]**: Uses spread spectrum technology

- Narrow-band signal spread over broader frequency range
- Each user assigned unique spreading code
- Signals appear as noise to unauthorized receivers

**Spread Spectrum Characteristics**:

- **Narrow-band transmissions**: Single frequency or narrow range
- **Spread spectrum**: Broader frequency distribution
- **Direct Sequence Spread Spectrum (DSSS)**: Frequency spectrum resembles random noise

**Advantages**:

- Bandwidth efficient
- No coordination/synchronization necessary
- Good protection against interference and eavesdropping
- Graceful degradation with increased users

**Disadvantages**:

- More complex signal regeneration
- Higher processing requirements
- Near-far problem (power control needed)

### 3.4 Orthogonal Frequency Division [[Multiplexing]] (OFDM) - 4G Technology

**Principle**: Frequency division technique without guard bands for higher spectrum efficiency

**Technical [[Implementation]]**:

- Whole band divided into N subcarriers
- Each subcarrier is sinc [[function]]
- Zero-crossing points eliminate inter-carrier interference
- No guard bands required

**Applications**:

- [[WiFi]] (802.11a, g, n, ac)
- Digital Audio Broadcasting (DAB)
- Digital Video Broadcasting (DVB)
- WiMax
- 4G/LTE networks

**Key Advantage**: Higher spectrum efficiency compared to traditional FDMA

### 3.5 Carrier Sense Multiple Access (CSMA) - [[WiFi]]

**Principle**: Listen before transmitting to avoid collisions

- Used in [[WiFi]] networks
- Collision detection and avoidance mechanisms

---

## 4. Transmission Direction

### 4.1 Simplex Transmission

**Characteristics**:

- Unidirectional communication only
- No return channel

**Applications**:

- Broadcast radio
- Television broadcasting
- Emergency alert systems

### 4.2 Half-Duplex Transmission

**Characteristics**:

- Bidirectional communication
- Only one direction at a time
- Requires turn-taking protocol

**Applications**:

- CB radios
- Walkie-talkies
- Traditional radio dispatch systems

### 4.3 Full-Duplex Transmission

**Characteristics**:

- Simultaneous bidirectional communication
- Separate channels for each direction

**Applications**:

- Telephone systems
- Modern [[cellular]] networks
- [[Satellite]] communications

---

## 5. Wireless Signal Propagation

### 5.1 Propagation Mechanisms

**Reflection**:

- Occurs at large obstacles
- [[Object]] surface > wavelength
- Signal bounces off surfaces

**Diffraction**:

- Occurs at edges of obstacles
- Edge of impenetrable body > wavelength
- Signal bends around obstacles

**Scattering**:

- Occurs at small obstacles
- [[Object]] size ≈ wavelength or smaller
- Signal scattered in multiple directions

**Penetration**:

- Signal passes through materials
- Attenuation depends on material properties

### 5.2 Multipath Propagation

**Definition**: Multiple copies of signal arrive at receiver via different paths

**Causes**:

- Reflection from buildings, terrain
- Diffraction around obstacles
- Scattering from small objects

**Signal-to-Noise Ratio (SNR)**:

```
SNR = Signal Power / Noise Power
```

### 5.3 Impact of Multipath

**Fading**:

- Multiple signal copies arrive at different phases
- Constructive/destructive interference
- Signal power varies over time
- Can cause complete signal loss

**Inter-Symbol Interference (ISI)**:

- Delayed signal copies arrive during subsequent bit periods
- Causes bit errors
- Limits [[data]] transmission rates
- Requires equalization techniques

### 5.4 Propagation [[Models]]

Mathematical [[models]] used to predict signal strength and coverage:

- **Free space model**: Ideal propagation without obstacles
- **Two-ray model**: Direct path + ground reflection
- **Empirical [[models]]**: Based on measurement [[data]] (Okumura-Hata, COST-231)

---

## Key Takeaways

1. **Radio systems** comprise filters, mixers, amplifiers, antennas, and DACs working together
2. **Multiple access schemes** enable spectrum sharing: FDMA (frequency), TDMA (time), CDMA (code), OFDM (orthogonal frequencies)
3. **Transmission directions** vary by application: simplex (broadcast), half-duplex (walkie-talkies), full-duplex (phones)
4. **Signal propagation** involves reflection, diffraction, scattering, and penetration mechanisms
5. **Multipath effects** cause fading and inter-symbol interference, requiring mitigation techniques

## Technology Evolution

- **2G**: TDMA/FDMA
- **3G**: CDMA
- **4G/LTE**: OFDM
- **[[WiFi]]**: CSMA + OFDM

---

_Note: Refer to textbook for additional details on radio propagation [[models]] and advanced signal processing techniques._