export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record

type UserRolesStatuses = Record<UserRole, string>; 

const RoleDescription: UserRolesStatuses = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};

console.log(RoleDescription[UserRole.admin]); // "Admin User"
console.log(RoleDescription[UserRole.editor]); // "Editor User"
console.log(RoleDescription[UserRole.guest]);