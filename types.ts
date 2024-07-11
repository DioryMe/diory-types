export interface IMetadata {
  name: string
  created?: string
  modified?: string
  duration?: string
  thumbnail?: string
  latlng?: string
}

export interface IFileType {
  ext?: string
  mime?: string
}

export interface IDataClient {
  type: string
  readTextItem(url: string): Promise<string>
  readItem(url: string): Promise<Buffer>
  readToStream(url: string): any
  exists(url: string): Promise<boolean>
  writeTextItem(url: string, fileContent: string): Promise<boolean>
  writeItem(url: string, fileContent: Buffer | string): Promise<boolean>
  deleteItem(url: string): Promise<boolean>
  deleteFolder(url: string): Promise<void>
  list(url: string): Promise<string[]>
  getFileNames(url: string): Promise<string[]>
  getFolderNames(url: string): Promise<string[]>
  getFileType(url: string): Promise<IFileType>
  getMetadata(url: string): IMetadata
  getThumbnail?(imageUrl: string): Promise<string | undefined>
  getVideoMetadata?(videoUrl: string): Promise<IMetadata>
}

export interface IConnectionClient {
  dataClients: IDataClient[]
  connections: IConnectionObject[]
  getDiosphere: () => Promise<IDiosphereObject | undefined>
  saveDiosphere: (diosphereObject: IDiosphereObject) => void
  getDiograph: (connections?: IConnectionObject[]) => Promise<IDiographObject | undefined>
  saveDiograph: (diographObject: IDiographObject) => void
}

export interface IDataObject {
  '@context': string
  '@type': string
  contentUrl: string
  encodingFormat: string
  height?: number
  width?: number
}

export interface ILinkObject {
  id: string
}

export interface IDioryProps {
  text?: string
  image?: string
  latlng?: string
  date?: string
  data?: IDataObject[]
  links?: ILinkObject[]
  created?: string
  modified?: string
}

export interface IDioryObject extends IDioryProps {
  id: string
}

export interface IDiory extends IDioryObject {
  update: (dioryProps: IDioryProps, modify?: boolean) => IDiory
  addLink: (linkedDioryObject: IDioryObject) => IDiory
  removeLink: (linkedDioryObject: IDioryObject) => IDiory
  save: (saveCallback?: () => void) => IDiory
  toObject: () => IDioryObject
  toJson: () => string
}

export interface IConnectionObject {
  id: string
  client: string
  address: string
}

export interface IDiographObject {
  // TODO: Make '/' required
  // '/': IDioryObject
  [key: string]: IDioryObject
}

export interface IDiograph {
  connectionClient?: IConnectionClient
  diograph: { [index: string]: IDiory }
  connect: (connectionClient: IConnectionClient) => IDiograph
  getDiograph: () => Promise<IDiograph>
  saveDiograph: () => Promise<IDiograph>
  addDiograph: (diographObject: IDiographObject) => IDiograph
  queryDiograph: (dioryObject: IDioryProps) => IDiographObject
  resetDiograph: () => IDiograph
  getDiory: (dioryObject: IDioryObject) => IDiory
  addDiory: (dioryProps: IDioryProps | IDioryObject | IDiory, key?: string) => IDiory
  updateDiory: (dioryObject: IDioryObject) => IDiory
  removeDiory: (dioryObject: IDioryObject) => void
  addDioryLink: (dioryObject: IDioryObject, linkObject: ILinkObject) => IDiory
  removeDioryLink: (dioryObject: IDioryObject, linkObject: ILinkObject) => IDiory
  toObject: () => IDiographObject
  toJson: () => string
}

export interface IDoorObject {
  id: string
  path?: string
}

export interface IConnectionObject {
  id: string
  client: string
  address: string
}

export interface IRoomProps {
  text?: string
  doors?: IDoorObject[]
  connections?: IConnectionObject[]
  created?: string
  modified?: string
}

export interface IRoomObject extends IRoomProps {
  id: string
}

export interface IRoom extends IRoomObject {
  update: (roomProps: IRoomProps, addOnly?: boolean) => IRoom
  addDoor: (doorObject: IDoorObject) => IRoom
  removeDoor: (doorObject: IDoorObject) => IRoom
  addConnection: (connectionObject: IConnectionObject) => IRoom
  removeConnection: (connectionObject: IConnectionObject) => IRoom
  save: (callback?: () => void) => IRoom
  toObject: () => IRoomObject
}

export interface IRoomsObject {
  // TODO: Make '/' required
  // '/': IRoomObject
  [key: string]: IRoomObject
}

export interface IDiosphereObject {
  rooms: IRoomsObject
}

export interface IDiosphere {
  connectionClient?: IConnectionClient
  rooms: { [index: string]: IRoom }
  connect: (connectionClient: IConnectionClient) => IDiosphere
  getDiosphere: () => Promise<IDiosphere>
  saveDiosphere: (diosphereObject: IDiosphereObject) => Promise<IDiosphere>
  addDiosphere: (diosphereObject: IDiosphereObject) => IDiosphere
  resetRooms: () => IDiosphere
  queryRooms: (roomObject: IRoomProps) => IRoomsObject
  getRoom: (roomObject: IRoomObject) => IRoom
  addRoom: (roomProps: IRoomProps | IRoomObject | IRoom, key?: string) => IRoom
  updateRoom: (roomObject: IRoomObject) => IRoom
  removeRoom: (roomObject: IRoomObject) => void
  addRoomDoor: (roomObject: IRoomObject, doorObject: IDoorObject) => IRoom
  removeRoomDoor: (roomObject: IRoomObject, doorObject: IDoorObject) => IRoom
  addRoomConnection: (roomObject: IRoomObject, connectionObject: IConnectionObject) => IRoom
  removeRoomConnection: (roomObject: IRoomObject, connectionObject: IConnectionObject) => IRoom
  toObject: () => IDiosphereObject
}
