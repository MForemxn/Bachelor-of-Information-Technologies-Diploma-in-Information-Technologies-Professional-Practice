# To Run in Terminal
```
ollama run <modelname>
```
# To Run in Obsidian: 
```
OLLAMA_ORIGINS=app://obsidian.md* ollama serve
```
# To Run in [[GUI]]
```
cd /Applications/ollama-[[gui]]
yarn dev
```
# List of Models
|Model|Parameters|Size|Run|Best Use Case|
|---|---|---|---|---|
|[![](https://camo.githubusercontent.com/71704f1e4cea0174a5b3158057d2f3508ae6d4304160de35edb06dc85d6a1e64/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65772d626c61636b2e737667)](https://ollama.ai/library/mixtral) Mixtral-8x7B Large|7B|26GB|`ollama run mixtral`|Chatbot|
|Mistrallite|7B|5gb|`ollama run mistrallite`|Obsidian (High Context)|
|[![](https://camo.githubusercontent.com/71704f1e4cea0174a5b3158057d2f3508ae6d4304160de35edb06dc85d6a1e64/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65772d626c61636b2e737667)](https://ollama.ai/library/solar) Solar|10.7B|6.1GB|`ollama run solar`|New Better Obsidian|
|Code Llama|7B|3.8GB|`ollama runcodellama`|Coding|
|Llama 2 Uncensored|7B|3.8GB|`ollama run llama2-uncensored`|Uncensored Fun|
|Code Gemma|7B|5gb|`ollama run codegemma`|Other Coding|
|Llama 2|7B|3.8GB|`ollama run llama2`|
|Llama 2|13B|5gb|`ollama run llama2:13b`|
|Gemma|7B|5gb|`ollama run gemma`|
|[![](https://camo.githubusercontent.com/71704f1e4cea0174a5b3158057d2f3508ae6d4304160de35edb06dc85d6a1e64/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65772d626c61636b2e737667)](https://ollama.ai/library/phi) Phi|2.7B|1.6GB|`ollama run phi`|
|[![](https://camo.githubusercontent.com/71704f1e4cea0174a5b3158057d2f3508ae6d4304160de35edb06dc85d6a1e64/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e65772d626c61636b2e737667)](https://ollama.ai/library/dolphin-mixtral) Dolphin Mixtral|7B|4.1GB|`ollama run dolphin-mixtral`|
|Mistral|7B|4.1GB|`ollama run mistral`|
|Mistral (instruct)|7B|4.1GB|`ollama run mistral:7b-instruct`|
|Orca Mini|3B|1.9GB|`ollama run orca-mini`|
|Vicuna|7B|3.8GB|`ollama run falcon`|
|Vicuna|7B|3.8GB|`ollama run vicuna`|
|Vicuna (16K context)|7B|3.8GB|`ollama run vicuna:7b-16k`|
|Vicuna (16K context)|13B|7.4GB|`ollama run vicuna:13b-16k`|
|nexusraven|13B|7.4gB|`ollama run nexusraven`|
|starcoder|7B|4.3GB|`ollama run starcoder:7b`|
|wizardlm-uncensored|13B|7.4GB|`ollama run wizardlm-uncensored`|