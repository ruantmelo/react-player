class TimeHelper {
    static format(value) {
        let minutes = '';
        let seconds = '';
        let time = '';

        if (!value) return '00:00'

        if (value >= 60) {
            seconds = value % 60 < 10 ? '0' + value % 60 : value % 60;
            minutes = parseInt(value / 60) < 10 ? '0' + parseInt(value / 60) : parseInt(value / 60)

        }

        else {
            minutes = '00'
            seconds = value < 10 ? '0' + value : value;
        }

        time = `${minutes}:${seconds}`;
        return time;
    }

}


export default TimeHelper;