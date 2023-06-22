interface Image {
  fileName?: string
  type?: string
  uri?: string
}

interface AuthStore {
  accessToken: undefined | string
  email?: undefined | string
  setAccessToken: (accessToken: string, email?: string) => Promise<void>
  fetchAccessToken: (email: string, password: string) => Promise<void>
  deleteAccessToken: () => Promise<void>
  refreshAccessToken: (accessToken?: string) => Promise<void>
}

interface AppointmentStore {
  appointments: {
    [key in APPOINTMENT_TABS]: Appointment[]
  } & {
    single?: Appointment
  }
  hasActiveAppointment?: boolean
  setAppointment: (appointment: Appointment) => void
  setAppointments: (tab: APPOINTMENT_TABS, appointment: Appointment[]) => void
  skipImageUpload: () => void
  fetchAppointment: (appointmentId: number) => Promise<void>
  fetchAppointments: (
    partnershipId: number,
    tab: APPOINTMENT_TABS
  ) => Promise<void>
  updateStatus: (
    appointmentId: number,
    newStatus: APPOINTMENT_STATUSES
  ) => Promise<void>
  revertStatus: (
    appointmentId: number,
    newStatus: APPOINTMENT_STATUSES
  ) => Promise<void>
  scheduleAppointment: (
    appointmentId: number,
    date?: Date,
    time?: Date
  ) => Promise<void>
  uploadImage: (
    appointmentId: number,
    image: Image,
    config?: { isSignature?: boolean }
  ) => Promise<void>
  deleteImage: (appointmentId: number, fileId: number) => Promise<void>
  createNewAppointment: (appointmentId: number) => Promise<void>
}

interface PartnershipStore {
  partnerships: Partnership[]
  partnership: { partnershipId: number | null; partnershipName: string | null }
  setPartnership: (partnershipId: number, partnershipName: string) => void
  fetchPartnerships: () => Promise<void>
}

interface ErrorStore {
  errors: JaimyError[]
  setError: (error: Omit<JaimyError, 'id'>) => void
  clearError: (errorId: string) => void
  clearErrors: () => void
}

// type Store = AuthStore & AppointmentStore & PartnershipStore & ErrorStore
type Store = AuthStore & ErrorStore
