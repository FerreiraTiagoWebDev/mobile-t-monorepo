type NavigationProps = {
  Home: undefined
  WebView: { isForgotPassword?: boolean } | undefined
  Login: undefined
  PartnershipList: undefined
  MainTabs: { screen: keyof MainTabsProps; params?: any } | undefined
}

type MainTabsProps = {
  Unplanned: {
    tab: APPOINTMENT_TABS
  }
  Upcoming: {
    tab: APPOINTMENT_TABS
  }
  Past: {
    tab: APPOINTMENT_TABS
  }
  Appointment: {
    appointmentId: number
    tab: APPOINTMENT_TABS
  }
  ConfirmScheduleAppointment: {
    appointmentId: number
  }
  ScheduledAppointment: {
    appointmentId: number
  }
  ScheduleAppointment: {
    appointmentId: number
  }
  ConfirmOnMyWayAppointment: {
    appointmentId: number
  }
  CancelAppointment: {
    appointmentId: number
    tab: APPOINTMENT_TABS
  }
  CompleteAppointment: {
    appointmentId: number
  }
  CreateNewAppointment: {
    appointmentId: number
  }
}
