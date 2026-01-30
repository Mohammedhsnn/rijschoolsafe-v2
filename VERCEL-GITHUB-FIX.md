# Vercel–GitHub koppeling fixen (Internal Server Error)

Als je in Vercel bij "Vulnerable Projects" of bij een deployment een **Internal Server Error** krijgt, komt dat vaak door de koppeling tussen Vercel en GitHub. Probeer onderstaande stappen.

## 1. Vercel–GitHub opnieuw koppelen

1. Ga naar **https://vercel.com** → inloggen.
2. **Settings** (van je team/account) → **Git** (of **Integrations**).
3. Controleer of **GitHub** gekoppeld is. Zo niet, koppel GitHub opnieuw.
4. Ga naar **https://github.com/settings/installations** en zoek **Vercel**:
   - Klik op **Configure**.
   - Controleer of de repository **Mohammedhsnn/v0-rijschoolsafe-upgrade** toegang heeft (of "All repositories").
   - Sla eventuele wijzigingen op.

## 2. Project in Vercel opnieuw koppelen aan GitHub

1. In Vercel: open je project **v0-rijschoolsafe-upgrade**.
2. Ga naar **Settings** → **Git**.
3. Controleer of de juiste repo staat: `Mohammedhsnn/v0-rijschoolsafe-upgrade`.
4. Als de koppeling fout of "disconnected" is:
   - Kies **Disconnect** en koppel daarna opnieuw via **Connect Git Repository** → **GitHub** → selecteer de repo.

## 3. GitHub App-machtigingen controleren

1. Ga naar **https://github.com/settings/applications**.
2. Onder **Authorized OAuth Apps** of **GitHub Apps** zoek je **Vercel**.
3. Controleer of Vercel toegang heeft tot de juiste repo(s). Geef indien nodig opnieuw toegang.

## 4. Na het fixen: deployment opnieuw triggeren

- Push een commit naar `main`, of  
- In Vercel: **Deployments** → bij de laatste deployment → **Redeploy**.

---

**Tip:** De kwetsbaarheden in dit project zijn lokaal al grotendeels opgelost (Next.js 15.5.11, lodash gefixt). Na een push zou "Vulnerable Projects" in Vercel kunnen verdwijnen zodra de nieuwe deployment klaar is.
