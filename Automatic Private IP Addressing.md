# ONE SENTENCE SUMMARY:
Automatic Private IP Addressing (APIPA) assigns a unique [[IP address]] within a specific range when [[DHCP]] servers are unavailable.

# OVERVIEW:
Automatic Private IP Addressing (APIPA) is a feature in Windows [[operating systems]] that automatically assigns an [[IP address]] from the range 169.254.0.1 to 169.254.255.254 when a [[DHCP]] server is unreachable. This allows devices on a local network to communicate with each other even if they cannot access a [[DHCP]] server to obtain an [[IP address]]. APIPA is particularly useful in small networks or during network configuration and troubleshooting, as it ensures basic connectivity without manual [[IP address]] configuration. However, APIPA does not provide internet connectivity, as the assigned IP addresses are not routable on [[the internet]]. Devices using APIPA can only communicate with other devices on the same local network segment. APIPA is a temporary solution, and network administrators should resolve [[DHCP]] issues to restore full network functionality.

# MAIN POINTS:
1. APIPA assigns IP addresses when [[DHCP]] is unavailable.
2. Uses IP range 169.254.0.1 to 169.254.255.254.
3. Enables local network communication without [[DHCP]].
4. Does not provide internet connectivity.
5. Useful for small networks and troubleshooting.
6. Ensures basic connectivity without manual configuration.
7. APIPA addresses are not internet-routable.
8. Temporary solution until [[DHCP]] issues are resolved.
9. Only allows communication within the same network segment.
10. Commonly used in Windows [[operating systems]].

# TAKEAWAYS:
1. APIPA ensures local connectivity without [[DHCP]].
2. It assigns IPs from a specific private range.
3. Does not support internet access.
4. Useful for troubleshooting and small networks.
5. Temporary measure until [[DHCP]] is restored.