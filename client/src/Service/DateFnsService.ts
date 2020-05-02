import { startOfWeek, endOfWeek, format, eachDayOfInterval } from 'date-fns'
import { fr } from 'date-fns/locale'
import { capitalize } from '../Utils/StringUtils';

export const getWeekDays = (): Array<string> => {
    let now = new Date();
    let weekDays = eachDayOfInterval({ start: startOfWeek(now, { weekStartsOn: 1 }), end: endOfWeek(now, { weekStartsOn: 1 }) });
    return weekDays.map((day) => {
        return capitalize(format(day, "iiii", { locale: fr }));
    });
}

export const getDayHours = (): Array<string> => {
    let allHours: Array<string> = [];
    let interval: number = 15;
    let startHour: number = 420;
    let endHour: number = 960;

    for (var i = startHour; i < endHour; i += interval) {
        let hour = Math.floor(i / 60);
        let minutes = (i % 60);
        allHours.push(("0" + hour).slice(-2) + ':' + ("0" + minutes).slice(-2));
    }
    return allHours;
}

