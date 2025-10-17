# Feasibility Analysis of a LoRa-Based C-V2X Simulation for Emergency Vehicle Preemption

Implementing an emergency vehicle preemption (EVP) system using LoRa radio is technically feasible with current technology, though it entails trade-offs in latency, scalability, and regulatory compliance. A prototype using LoRa transceivers, Arduino/ESP32 controllers, and a WebSocket dashboard achieved average round-trip latencies of approximately 84.5 ms and packet reception ratios above 98%. These results satisfy typical EVP requirements, which tolerate up to 100 ms latency (Pinto, 2025). However, deployment feasibility depends on cost, reliability, and integration with existing traffic infrastructure.

## Hardware, Cost, and Integration

Hardware requirements for a LoRa-based EVP are minimal and inexpensive. Commodity LoRa modules (e.g., SX127x-based) cost about $10–20, and microcontrollers such as ESP32 or Arduino add another $10–20. Thus, each on-vehicle or roadside unit can be built for a few tens of dollars, far below the cost of certified C-V2X units, which average $160–$170 per vehicle and $6,000–$7,000 per intersection (Deglobal Solutions, 2024). The system operates in unlicensed sub-GHz ISM bands, requiring no spectrum fees, and benefits from mature LoRa ecosystems and open-source hardware.

Integration with traffic controllers is straightforward since most modern controllers support external I/O or IP connections. A LoRa receiver can be wired to trigger preemption logic locally or via a lightweight WebSocket link. Unlike C-V2X, which relies on dedicated roadside units (RSUs) and backhaul networks, LoRa solutions can retrofit existing infrastructure with minimal modification.

Scalability is also favorable. A single LoRaWAN gateway can serve thousands of nodes across several square kilometers (The Things Network, n.d.), and multiple gateways can provide redundancy. LoRa’s sub-GHz chirp spread-spectrum modulation offers strong building penetration and long-range coverage—3 km in urban areas and over 10 km in rural terrain (Zadobrischi & Havriliuc, 2024; The Things Network, n.d.). Thus, LoRa could theoretically support large-scale EVP networks with little additional infrastructure.

Nonetheless, our prototype used direct LoRa links rather than LoRaWAN scheduling. Real deployments must consider duty-cycle limits, listen-before-talk (LBT) rules, and interference from other ISM devices. Fortunately, EVP messages are infrequent, so channel occupancy is low.

## Performance: Latency and Reliability

Performance testing showed LoRa latency of ~84 ms, higher than C-V2X but still within preemption tolerances. Field studies of C-V2X show latencies of 18–52 ms (Kutila et al., 2021), approximately two to four times faster than LoRa. Still, many EVP systems target under 100 ms latency (Pinto, 2025), and our prototype meets that requirement.

Reliability is likewise strong. The LoRa prototype achieved over 98% packet reception, comparable to C-V2X field results reporting under 10% packet loss (Kutila et al., 2021). Other studies found LoRa maintaining packet error rates below 10% in urban environments (Zadobrischi & Havriliuc, 2024). LoRa’s long airtime increases collision potential under heavy load, but emergency messages are sparse, minimizing contention. Urban obstructions can degrade range, yet LoRa’s sub-GHz penetration generally outperforms 5.9 GHz C-V2X signals.

## Comparison with Commercial C-V2X Systems

C-V2X remains superior in latency, throughput, and security, benefiting from standardized use of the 5.9 GHz ITS band and established safety certification. LoRa operates in unlicensed ISM spectrum, which reduces costs but falls outside formal V2X regulatory frameworks (Zadobrischi & Havriliuc, 2024). Thus, any LoRa-based EVP would currently be experimental.

Cost, however, is a decisive advantage. The Evansville, Indiana, deployment of an LTE/C-V2X EVP system cost roughly $4 million for 230 signals and 40 vehicles—about $17,000 per intersection (Applied Information, 2021). A comparable LoRa setup could cost under $200 per intersection and vehicle, making it attractive for smaller municipalities or developing regions.

Overall, LoRa sacrifices some performance and certification rigor for dramatically lower cost. Its affordability makes it ideal for pilots, research, or interim deployments until C-V2X infrastructure becomes widespread.

## Deployment Contexts

Feasibility varies by environment. In dense urban areas, LoRa’s extended range can cover multiple intersections with a single node, though multipath interference and congestion may limit performance. In rural settings, LoRa’s 10 km range and minimal infrastructure requirements offer clear advantages (The Things Network, n.d.).

In developed regions, agencies investing in standardized ITS infrastructure may favor certified C-V2X solutions. Nonetheless, LoRa can serve as a low-cost testbed or community-scale project. In developing countries, where infrastructure budgets are smaller, LoRa’s affordability and accessibility are compelling. Many regions already use LoRaWAN for utilities, simplifying deployment.

Still, the LoRa ecosystem lacks real-world EVP implementations, while C-V2X enjoys growing support from automakers and transportation agencies (Deglobal Solutions, 2024). LoRa-based EVP systems will likely remain in research or pilot stages until interoperability and safety standards evolve.

## Limitations and Constraints

Key limitations include **latency and bandwidth**, since LoRa’s low data rate constrains message complexity. EVP commands are lightweight, but expanding to richer telemetry or video is infeasible. **Regulatory issues** are also significant: although LoRa operates legally under ISM rules, using it for safety-critical traffic control may require special approval. In Europe, for instance, the 868 MHz band enforces a 1% duty cycle per device.

**Standardization** poses another challenge. Production EVP systems typically use standard message sets (SPaT/MAP/SRM) defined by ITS America (2024). Our prototype transmitted simple preemption commands; for real deployment, compliance with these formats would be essential.

Lastly, **environmental variability**—such as urban canyons, weather, or multiple simultaneous transmitters—can affect performance. While LoRaWAN features like adaptive data rates or scheduled downlinks could help, C-V2X’s congestion-control algorithms are more mature.

---

### References

Applied Information, Inc. (2021, April 6). _Applied Information selected by Evansville, IN to provide connected vehicle technology for emergency vehicle traffic signal preemption_ [Press release]. [https://appinfoinc.com/evansville-emergency-vehicle-preemption/](https://appinfoinc.com/evansville-emergency-vehicle-preemption/)

Deglobal Solutions. (2024). _Cellular Vehicle-to-Everything (C-V2X) market drives at 41.81% CAGR (2025-34)._ TowardsAutomotive Insights. [https://www.towardsautomotive.com/insights/cellular-vehicle-to-everything-c-v2x-market-sizing](https://www.towardsautomotive.com/insights/cellular-vehicle-to-everything-c-v2x-market-sizing)

Intelligent Transportation Society of America (ITS America). (2024). _Future of V2X in 5.9 GHz report._ [https://itsa.org/wp-content/uploads/2024/05/ITS-America-Future-of-V2X-in-5.9-GHz-Report.pdf](https://itsa.org/wp-content/uploads/2024/05/ITS-America-Future-of-V2X-in-5.9-GHz-Report.pdf)

Kutila, M., Kauvo, K., Pyykönen, P., Zhang, X., Martinez, V. G., Zheng, Y., & Xu, S. (2021). _A C-V2X/5G field study for supporting automated driving._ _IEEE Intelligent Vehicles Symposium (IV 2021)_, 315–320. https://doi.org/10.1109/IV48863.2021.9576003

Pinto, B. (2025, July 24). _Are we really ready for C-V2X?_ Webbing Solutions. [https://webbingsolutions.com/are-we-really-ready-for-c-v2x/](https://webbingsolutions.com/are-we-really-ready-for-c-v2x/)

The Things Network. (n.d.). _What are LoRa and LoRaWAN?_ [https://www.thethingsnetwork.org/docs/lorawan/what-is-lorawan/](https://www.thethingsnetwork.org/docs/lorawan/what-is-lorawan/)

Zadobrischi, E., & Havriliuc, Ș. (2024). Enhancing scalability of C-V2X and DSRC vehicular communication protocols with LoRa 2.4 GHz in urban traffic systems. _Electronics, 13_(14), 2845. https://doi.org/10.3390/electronics13142845