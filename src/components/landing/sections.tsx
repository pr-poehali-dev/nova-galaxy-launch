import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-[#00FF88] border-[#00FF88]">ТОП 2026</Badge>,
    title: "Лучшие игры всех времён.",
    showButton: true,
    buttonText: 'Исследовать'
  },
  {
    id: 'action',
    title: 'Экшн и приключения',
    content: 'Red Dead Redemption 2, GTA V, The Witcher 3 — открытые миры, которые затягивают на сотни часов. Эпические сюжеты, живые персонажи и бесконечная свобода действий.'
  },
  {
    id: 'rpg',
    title: 'Ролевые игры',
    content: 'Elden Ring, Baldur\'s Gate 3, Dark Souls — шедевры жанра, где каждое решение меняет исход. Прокачивай персонажа, изучай глубокий лор и побеждай невозможное.'
  },
  {
    id: 'online',
    title: 'Многопользовательские хиты',
    content: 'Fortnite, Valorant, Counter-Strike 2 — битвы с игроками со всего мира. Командная игра, стратегия и молниеносные рефлексы решают всё.'
  },
  {
    id: 'discover',
    title: 'Найди свою игру',
    content: 'Тысячи игр ждут тебя — от инди-шедевров до блокбастеров. Погрузись в мир, который ты ещё не видел.',
    showButton: true,
    buttonText: 'Смотреть все'
  },
]