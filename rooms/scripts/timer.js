function get_room_time_id(room_id, start) {
    return room_id + (start ? '-time-start' : '-time-end')
}

function get_room_time(room_id, start) {
    return localStorage.getItem(get_room_time_id(room_id, start))
}

function set_room_time(room_id, start, value) {
    localStorage.setItem(get_room_time_id(room_id, start), value)
}

function start_timer(room_id) {
    if (get_room_time(room_id, true) === null) {
        set_room_time(room_id, true, (new Date()).toJSON())
    }
}

function end_timer(room_id) {
    let start_time = get_room_time(room_id, true)
    let end_time = get_room_time(room_id, false)

    if (start_time !== null && end_time === null) {
        set_room_time(room_id, false, (new Date()).toJSON())
    }
}

function is_room_complete(room_id) {
    let start_time = get_room_time(room_id, true)
    let end_time = get_room_time(room_id, false)
    return start_time !== null && end_time !== null
}

function get_elapsed_time_hhmmss(room_id) {
    let start_time = get_room_time(room_id, true)
    let end_time = get_room_time(room_id, false)
    if (start_time === null || end_time === null) return '00:00:00'

    // Get HH:MM:SS format
    time_elapsed = (new Date(end_time)) - (new Date(start_time))
    final_time = new Date(time_elapsed)
    final_time_str = final_time.toISOString().substring(11, 19)
    return final_time_str
}

function display_time(room_id, element_id) {
    document.getElementById(element_id).innerText += get_elapsed_time_hhmmss(room_id)
}

function conditional_display_time(room_id, element_id) {
    if (is_room_complete(room_id)) {
        display_time(room_id, element_id)
    } else {
        document.getElementById(element_id).style.display = 'none'
    }
}

function conditional_display_str(room_id, element_id, str_if_complete, str_otherwise) {
    elem = document.getElementById(element_id)
    elem.innerText = is_room_complete(room_id) ? str_if_complete : str_otherwise
}