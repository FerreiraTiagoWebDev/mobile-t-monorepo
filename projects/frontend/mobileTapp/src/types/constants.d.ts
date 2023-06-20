// @ts-ignore
enum TEXT_ALIGN {
  LEFT = 'LEFT',
  CENTER = 'CENTER',
  RIGHT = 'RIGHT',
}

enum APPOINTMENT_STATUSES {
  UNPLANNED = 'unplanned',
  TODO = 'todo',
  ON_MY_WAY = 'on_my_way',
  ARRIVED = 'arrived',
  DONE = 'done',
  CANCELLED = 'cancelled',
}

enum APPOINTMENT_LOCALES {
  EN = 'en',
  FR = 'fr',
  NL = 'nl',
}

enum APPOINTMENT_TYPES {
  RIK = 'rik',
  IR = 'ir',
}

enum APPOINTMENT_TABS {
  UNPLANNED = 'unplanned',
  UPCOMING = 'upcoming',
  PAST = 'past',
}

enum ERROR_TYPES {
  API = 'API',
  AUTH = 'AUTH',
  USER = 'USER',
  JS = 'JS',
}

enum REQUEST_METHODS {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
}

enum APPOINTMENT_STEPS {
  SCHEDULE = 'SCHEDULE',
  ON_MY_WAY = 'ON_MY_WAY',
  ARRIVE = 'ARRIVE',
  PICTURES = 'PICTURES',
  SIGNATURE = 'SIGNATURE',
  COMPLETE = 'COMPLETE',
}

enum COLORS {
  BLACK = '#000000',
  WHITE = '#FFFFFF',
  GREY100 = '#F3F4F6',
  GREY200 = '#D8DAE0',
  GREY300 = '#CCCCCC',
  GREY500 = '#637780',
  BLUE100 = '#90C4DA',
  BACKGROUND = '#32546D',
  SUCCESS = '#4CD964',
  WARNING = '#FFCC00',
  PRIMARY_MAIN = '#C30144',
  PRIMARY_DARK = '#961E34',
  PRIMARY_HOVER = '#FCDCE7',
  TRANSPARANT = 'transparent',
}

enum AVAILABLE_ACTIONS {
  SCHEDULE = 'schedule',
  CANCEL = 'cancel',
  ON_MY_WAY = 'on_my_way',
  UNDO_ON_MY_WAY = 'undo_on_my_way',
  ARRIVED = 'arrived',
  UNDO_ARRIVAL = 'undo_arrival',
  SIGNATURE = 'signature',
  REDO_SIGNATURE = 'redo_signature',
  COMPLETE = 'complete',
  COMPLETE_CREATE_NEW_APPOINTMENT = 'complete_create_new_appointment',
  CREATE_NEW_APPOINTMENT = 'create_new_appointment',
}
