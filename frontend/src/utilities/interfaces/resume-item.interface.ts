interface AboutInterface {
  name: string
  currentPosition: string
  description: string
  email?: string
  mobile?: string
  website?: string
  github?: string
  linkedin?: string
}

interface SkillsInterface {
  frontend?: string[]
  backend?: string[]
  tools: string[]
  languages?: string[]
}

interface WorkListInterface {
  id: number
  entity: string
  date: string
  location: string
  position: string
  tasks: any[]
}

interface WorkInterface {
  workList: WorkListInterface[]
}

interface EducationListInterface {
  id: number
  entity: string
  date: string
  location: string
  degree: string
  completed: string
}

interface EducationInterface {
  educationList: EducationListInterface[]
}

interface VolunteeringListInterface {
  id: number
  entity: string
  date: string
  location: string
  role: string
}

interface VolunteeringInterface {
  volunteeringList: VolunteeringListInterface[]
}

export interface ResumeItemInterface
  extends AboutInterface,
    WorkInterface,
    EducationInterface,
    VolunteeringInterface {
  id: number
  header: string
}
