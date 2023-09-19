import { defineStore } from 'pinia'

export const useMockData = defineStore('mock', {
  state: () => {
    return {
      tags: [
        {
          id: 1,
          name: "red tag",
          color: "#FF0000"
        },
        {
          id: 2,
          name: "blue tag",
          color: "#0000FF"
        },
        {
          id: 3,
          name: "green tag",
          color: "#00FF00"
        },
        {
          id: 4,
          name: "yellow tag",
          color: "#FFFF00"
        },
        {
          id: 5,
          name: "magenta tag",
          color: "#FF00FF"
        },
        {
          id: 6,
          name: "cyan tag",
          color: "#00FFFF"
        },
        
      ],
      types: [
        "default",
        "vm_host",
        "vm_guest"
      ],
      computers: [
        {
          name: "",
          type: "vm_host",
          location: "",
          entity: "",
          id: 1,
          tags: [
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            },
            {
              id: 3,
              name: "green tag",
              color: "#00FF00"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 2",
          type: "vm_guest",
          location: "Location 2",
          entity: "Entity 2",
          id: 2,
          tags: [
            {
              id: 4,
              name: "yellow tag",
              color: "#FFFF00"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 3",
          type: "vm_guest",
          location: "Location 3",
          entity: "Entity 3",
          id: 3,
          tags: [
            {
              id: 5,
              name: "magenta tag",
              color: "#FF00FF"
            },
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 4",
          type: "vm_guest",
          location: "Location 4",
          entity: "Entity 4",
          id: 4,
          tags: [
            {
              id: 4,
              name: "yellow tag",
              color: "#FFFF00"
            },
            {
              id: 5,
              name: "magenta tag",
              color: "#FF00FF"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 5",
          type: "vm_guest",
          location: "Location 5",
          entity: "Entity 5",
          id: 5,
          tags: [
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            },
            {
              id: 5,
              name: "magenta tag",
              color: "#FF00FF"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "VX 6",
          type: "default",
          location: "Location 6",
          entity: "Entity 6",
          id: 6,
          tags: [
            {
              id: 4,
              name: "yellow tag",
              color: "#FFFF00"
            },
            {
              id: 3,
              name: "green tag",
              color: "#00FF00"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "VS 7",
          type: "default",
          location: "Location 7",
          entity: "Entity 7",
          id: 7,
          tags: [
            {
              id: 1,
              name: "red tag",
              color: "#FF0000"
            },
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            },
            {
              id: 3,
              name: "green tag",
              color: "#00FF00"
            },
            {
              id: 4,
              name: "yellow tag",
              color: "#FFFF00"
            },
            {
              id: 5,
              name: "magenta tag",
              color: "#FF00FF"
            },
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
            
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "VGF 8",
          type: "default",
          location: "Location 8",
          entity: "Entity 8",
          id: 8,
          tags: [
            {
              id: 3,
              name: "green tag",
              color: "#00FF00"
            },
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            },
            {
              id: 1,
              name: "red tag",
              color: "#FF0000"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 9",
          type: "default",
          location: "Location 9",
          entity: "Entity 9",
          id: 9,
          tags: [
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            },
            {
              id: 3,
              name: "green tag",
              color: "#00FF00"
            },
            {
              id: 4,
              name: "yellow tag",
              color: "#FFFF00"
            }
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 10",
          type: "default",
          location: "Location 10",
          entity: "Entity 10",
          id: 10,
          tags: [
            {
              id: 1,
              name: "red tag",
              color: "#FF0000"
            },
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 11",
          type: "vm_host",
          location: "Location 11",
          entity: "Entity 11",
          id: 11,
          tags: [
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
            {
              id: 5,
              name: "magenta tag",
              color: "#FF00FF"
            },
            {
              id: 4,
              name: "yellow tag",
              color: "#FFFF00"
            }
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 12",
          type: "vm_host",
          location: "Location 12",
          entity: "Entity 12",
          id: 12,
          tags: [
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            }
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "ComputerS",
          type: "vm_host",
          location: "Location 12",
          entity: "Entity 12",
          id: 13,
          tags: [
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            }
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computsgf",
          type: "vm_host",
          location: "Location 12",
          entity: "Entity 12",
          id: 14,
          tags: [
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            }
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Computer 12",
          type: "vm_host",
          location: "Location 12",
          entity: "Entity 12",
          id: 15,
          tags: [
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            }
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
        {
          name: "Компутер",
          type: "vm_host",
          location: "Location 12",
          entity: "Entity 12",
          id: 16,
          tags: [
            {
              id: 6,
              name: "cyan tag",
              color: "#00FFFF"
            },
            {
              id: 2,
              name: "blue tag",
              color: "#0000FF"
            }
          ],
          createDate: new Date().toLocaleDateString("ru-RU"),
          updateDate: new Date().toLocaleDateString("ru-RU"),
          auditDate: new Date().toLocaleDateString("ru-RU"),
        },
      ]
    }
  },
  getters: {
    getTags() {
      return this.tags
    },
    getComputers() {
      return this.computers
    },
    getTypes() {
      return this.type
    }
  }
})