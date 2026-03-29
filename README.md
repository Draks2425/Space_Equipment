# Space_Equipment

Prosta aplikacja webowa w Angularze do przeglądania listy wyposażenia i podglądu szczegółów wybranego elementu.
Projekt ma charakter edukacyjny i pokazuje podstawową pracę z komponentami, modelami danych oraz organizacją kodu w Angular.

## Cel projektu

Projekt służy do:
- nauki podstaw Angular,
- ćwiczenia podziału aplikacji na mniejsze komponenty,
- pracy na prostym modelu danych,
- budowania czytelnej struktury folderów i plików.

## Funkcjonalności

- wyświetlanie listy elementów wyposażenia,
- prezentacja szczegółów pojedynczego elementu,
- podział UI na komponent listy i pojedynczego elementu,
- użycie modelu danych do typowania elementów.

## Stack technologiczny

- Angular 21
- TypeScript
- HTML + CSS
- Angular CLI

## Struktura projektu

Główna aplikacja znajduje się w katalogu `Space_Eq`:

- `Space_Eq/src/app/components/equipment-list` - komponent listy wyposażenia,
- `Space_Eq/src/app/components/equipment-item` - komponent pojedynczego elementu,
- `Space_Eq/src/app/models/equipment-item.model.ts` - model danych elementu wyposażenia,
- `Space_Eq/src/app/app.ts` - główny komponent aplikacji.

## Uruchomienie lokalne

1. Wejdź do katalogu aplikacji:

```bash
cd Space_Eq
```

2. Zainstaluj zależności:

```bash
npm.cmd install
```

3. Uruchom serwer deweloperski:

```bash
npm.cmd run start
```

4. Otwórz w przeglądarce:

```text
http://localhost:4200
```

## Dostępne skrypty

W katalogu `Space_Eq`:

- `npm.cmd run start` - uruchamia aplikację lokalnie,
- `npm.cmd run build` - buduje wersję produkcyjną,
- `npm.cmd run watch` - buduje w trybie obserwacji zmian,
- `npm.cmd run test` - uruchamia testy.

## Możliwe kierunki rozwoju

- filtrowanie i sortowanie listy wyposażenia,
- formularz dodawania nowych elementów,
- zapis danych do API lub lokalnej bazy,
- rozbudowa testów komponentów.