export const Origins =  {
  ALLOWED_ORIGINS: [
    '*',
    'http://localhost:3000'
  ]
}

export enum Roles {
  SUPER_ADMIN = 'super_admin',
  ADMIN = 'admin',
  ENTRY_STAFF = 'staff'
}

export enum Statuses {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export enum SchedulerStatus {
  PENDING = 'pending',
  APPROVED = 'scheduled',
  REJECTED = 'rejected',
  CANCELLED = 'cancelled'
}

export enum AppointmentStatuses {
  CANCELLED = 'cancelled',
  POSTPONED = 'postponed',
  ACTIVE = 'active'
}