# Static [[Routing]] vs [[Dynamic Routing]]

||[[Dynamic Routing]]|Static [[Routing]]|
|---|---|---|
|**Configuration Complexity**|Generally independent of the network size|Increases with network size|
|**Topology Changes**|Automatically adapts to topology changes|Administrator intervention required|
|**Scaling**|Suitable for simple and complex topologies|Suitable for simple topologies|
|**[[Security]]**|Less Secure|More Secure|
|**Resource Usage**|Uses CPU, Memory, Link bandwidth|No extra resources needed|
|**Predictability**|Route depends on the current topology|Route to destination is always the same|
# When to use Static Routes
- three uses for static routes:
	- smaller networks that are not expected to grow
	- [[routing]] to and from stub networks
		- stub network accessed by a single route and has one neighbour
	- a single default route to represent a path to ant network not found in the [[routing]] table
		- use default route on R1 to point to R2 for all other networks
# Static Route Applications
- connect to a specific network (stub)
- connect to a stub router
- summarise [[routing]] table entries which reduces size of [[routing]] advertisements
- create a backup route in case a primary link fails
# Types of Static Route
## [[Standard Static Route]]
- A [[standard static route]] is a manually configured network route used to direct [[data]] packets to a specific destination.
## [[Default Static Route]]
- A [[default static route]] is a predefined path used to direct [[data]] packets when no specific route is available.
## [[Summary Static Route]]
- A [[summary static route]] consolidates multiple specific routes into a single route to simplify and optimise network [[routing]].
## [[Floating Static Route]]
- A [[floating static route]] is a backup route with a higher [[administrative distance]], activated when primary routes fail.

# IPv4 Static Route Command
> `Router(config)# ip route *network address* *subnet-mask* { *ip-address* | *exit-intf* [*ip-address*]} [*distance*]}`

# [[Administrative Distance]]
[[Administrative distance]] is a metric used to determine the trustworthiness of a [[routing]] source, influencing route selection in routers.