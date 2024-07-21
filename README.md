# Diory Types and Actions

## Main types

Diosphere -> Room

Diograph -> Diory

ConnectionClient -> DataClient

## Actions
### Diosphere
| Diosphere                              | Room                         | ConnectionClient         | 
|----------------------------------------|------------------------------|--------------------------|
| connect(connectionClient)              |                              |                          |
| getDiosphere()                         |                              | getDiosphere(diosphere)  |
| saveDiosphere()                        |                              | saveDiosphere(diosphere) |
| addDiosphere(diosphere)                |                              | saveDiosphere(diosphere) |
| resetDiosphere()                       |                              |                          |
| queryDiograph(room)                    |                              |                          |
| addRoom(room)                          | new Room(room)               | saveDiosphere(diosphere) |
| updateRoom(room)                       | update(room)                 | saveDiosphere(diosphere) |
| removeRoom(room)                       |                              | saveDiosphere(diosphere) |
| addRoomConnection(room, connection)    | addConnection(connection)    | saveDiosphere(diosphere) |
| removeRoomConnection(room, connection) | removeConnection(connection) | saveDiosphere(diosphere) |
| toObject()                             |                              |                          |
| toJson()                               |                              |                          |

### Diograph
| Diograph                     | Diory            | ConnectionClient       | 
|------------------------------|------------------|------------------------|
| connect(connectionClient)    |                  |                        |
| getDiograph()                |                  | getDiograph()          |
| saveDiograph()               |                  | saveDiograph(diograph) |
| addDiograph(diograph)        |                  | saveDiograph(diograph) |
| resetDiograph()              |                  |                        |
| queryDiograph(diory)         |                  |                        |        
| addDiory(diory)              | new Diory(diory) | saveDiograph(diograph) |
| updateDiory(diory)           | update(diory)    | saveDiograph(diograph) |
| removeDiory(diory)           |                  | saveDiograph(diograph) |
| addDioryLink(diory, link)    | addLink(link)    | saveDiograph(diograph) |
| removeDioryLink(diory, link) | removeLink(link) | saveDiograph(diograph) |
| toObject()                   |                  |                        |
| toJson()                     |                  |                        |

### Diory Client (example usage)
| Diory Client                     | Diosphere                 | Diograph                  |
|----------------------------------|---------------------------|---------------------------|
| new DioryClient(dataClients)     |                           |                           |
| initialiseDiosphere(connections) | connect(connectionClient) |                           |
|                                  | resetDiosphere()          |                           |
|                                  | getDiosphere()            |                           |
|                                  | addDiosphere(diograph)    |                           |
|                                  | getRoom(id: /)            |                           |
| selectRoom(room)                 | getRoom(room)             |                           |
|                                  |                           |                           |
| initialiseDiograph(connections)  |                           | connect(connectionClient) | 
|                                  |                           | resetDiograph()           |
|                                  |                           | getDiograph()             |
|                                  |                           | addDiograph(diograph)     |
|                                  |                           | getDiory(id: /)           |
| focusDiory(diory)                |                           | getDiory(diory)           |

