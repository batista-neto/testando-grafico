import asyncio
import aiohttp

url = 'http://localhost:4000/azimute/atualizar'
anos = range(2022, 2100)  # Range de 20 anos (2022 a 2041)

async def atualizar_azimute(ano):
    async with aiohttp.ClientSession() as session:
        novo_dado = [{"azimute": ano}]
        async with session.post(url, json=novo_dado) as response:
            print(await response.json())  # Exibe a resposta da requisição

async def main():
    tasks = []
    for ano in anos:
        task = asyncio.create_task(atualizar_azimute(ano))
        tasks.append(task)
        await asyncio.sleep(0.1)  # Aguarda 0.1 segundo (100 milissegundos) antes de iniciar a próxima requisição
    await asyncio.gather(*tasks)

loop = asyncio.get_event_loop()
loop.run_until_complete(main())