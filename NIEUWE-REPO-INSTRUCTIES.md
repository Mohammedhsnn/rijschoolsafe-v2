# Project in een nieuwe GitHub-repo zetten

De code staat al op de nieuwe repo: **https://github.com/Mohammedhsnn/rijschoolsafe-v2**

- Remote `new-origin` wijst naar `rijschoolsafe-v2`. Om later opnieuw te pushen: `git push new-origin main`
- Als je nog een andere nieuwe repo wilt: maak die op https://github.com/new (leeg, geen README), voeg toe met `git remote add andere-naam git@github.com:Mohammedhsnn/JOUW-REPO.git` en push met `git push andere-naam main`

---

## Nieuw Vercel-project koppelen

1. Ga naar **https://vercel.com/new**
2. Kies **Import Git Repository**
3. Selecteer **rijschoolsafe-v2** (of de naam die je hebt gekozen)
4. Klik **Import** – Vercel pakt de standaardinstellingen (Next.js)
5. Klik **Deploy**

Klaar: je project draait in een nieuw Vercel-project zonder de oude, kapotte koppeling.
