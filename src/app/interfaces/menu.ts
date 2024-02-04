export interface IMenu {
    menuItemIcon: string,
    menuItemName: string,
    menuItemBadgeNumber?: number
}

export interface IMenuGroup {
    menuGroupName?: string,
    menuGroupItems: IMenu[]
}