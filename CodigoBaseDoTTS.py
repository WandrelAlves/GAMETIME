#!/usr/bin/env python
# coding: utf-8

# In[1]:


get_ipython().system('pip install ibm_watson')


# In[2]:


from ibm_watson import TextToSpeechV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator


# In[3]:


apikey = '4R5OHrdqVaLXzVXrIVJkYOkUHOzIQb4-GhREAzsm8S5D'
url = 'https://api.au-syd.text-to-speech.watson.cloud.ibm.com/instances/30839c81-94d8-4d7b-900e-d1e51c7ac6c5'


# In[4]:


authenticator = IAMAuthenticator(apikey)
tts = TextToSpeechV1(authenticator=authenticator)
tts.set_service_url(url)


# In[ ]:





# In[18]:


with open('mario.txt', 'r') as f:
    text = f.readlines()


# In[19]:


text = [line.replace('\n','') for line in text]


# In[20]:


text = ''.join(str(line) for line in text)


# In[21]:


with open('./marioB.mp3', 'wb') as audio_file:
    res = tts.synthesize(mario, accept='audio/mp3', voice='pt-BR_IsabelaV3Voice').get_result()
    audio_file.write(res.content)


# In[14]:


import json
voices = tts.list_voices().get_result()
print(json.dumps(voices, indent=2))


# In[24]:


mario = """MÁRIO BROTHERS: O PAI DOS JOGOS ANTIGOS. Mário, o encanador mais famoso do mundo dos games, e seu irmão Luigi, são certamente um dos maores fenômenos da história dos videogames. O objetivo básico do jogo é enfrentar as tartarugas e outras criaturas em inúmeras fases e níveis. A jogabilidade é horizontal e bastante simples."""


# In[25]:


with open('./MarioBRO.mp3', 'wb') as audio_file:
    res = tts.synthesize(mario, accept='audio/mp3', voice='pt-BR_IsabelaV3Voice').get_result()
    audio_file.write(res.content)


# In[ ]:




