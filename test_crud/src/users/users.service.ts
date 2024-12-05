import { Injectable } from '@nestjs/common';
import { UserRole } from 'src/enums/user-role.enum';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob.smith@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: 3,
      name: 'Charlie Brown',
      email: 'charlie.brown@example.com',
      role: UserRole.INTERN,
    },
    {
      id: 4,
      name: 'Diana Prince',
      email: 'diana.prince@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 5,
      name: 'Ethan Hunt',
      email: 'ethan.hunt@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: 6,
      name: 'Fiona Gallagher',
      email: 'fiona.gallagher@example.com',
      role: UserRole.INTERN,
    },
    {
      id: 7,
      name: 'George Adams',
      email: 'george.adams@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 8,
      name: 'Hannah Lee',
      email: 'hannah.lee@example.com',
      role: UserRole.INTERN,
    },
    {
      id: 9,
      name: 'Ian Wright',
      email: 'ian.wright@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 10,
      name: 'Jackie Chan',
      email: 'jackie.chan@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: 11,
      name: 'Katherine Watson',
      email: 'katherine.watson@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 12,
      name: 'Liam Neeson',
      email: 'liam.neeson@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: 13,
      name: 'Mia Wallace',
      email: 'mia.wallace@example.com',
      role: UserRole.INTERN,
    },
    {
      id: 14,
      name: 'Nathan Drake',
      email: 'nathan.drake@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 15,
      name: 'Olivia Benson',
      email: 'olivia.benson@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: 16,
      name: 'Paul Walker',
      email: 'paul.walker@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 17,
      name: 'Quinn Harper',
      email: 'quinn.harper@example.com',
      role: UserRole.INTERN,
    },
    {
      id: 18,
      name: 'Rachel Green',
      email: 'rachel.green@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 19,
      name: 'Sam Wilson',
      email: 'sam.wilson@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: 20,
      name: 'Tina Fey',
      email: 'tina.fey@example.com',
      role: UserRole.INTERN,
    },
    {
      id: 21,
      name: 'Uma Thurman',
      email: 'uma.thurman@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 22,
      name: 'Victor Stone',
      email: 'victor.stone@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 23,
      name: 'Will Smith',
      email: 'will.smith@example.com',
      role: UserRole.ADMIN,
    },
    {
      id: 24,
      name: 'Xena Warrior',
      email: 'xena.warrior@example.com',
      role: UserRole.ENGINEER,
    },
    {
      id: 25,
      name: 'Yara Greyjoy',
      email: 'yara.greyjoy@example.com',
      role: UserRole.INTERN,
    },
    {
      id: 26,
      name: 'Zack Snyder',
      email: 'zack.snyder@example.com',
      role: UserRole.ENGINEER,
    },
  ];

  findAll(role?: string | undefined) {
    console.log(role);
    
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

     return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  create(user: UserDto) {
    // .sort((a, b) => b.id - a.id): This is the comparison function for sorting. It compares the id of b and a
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
    const newUser = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }

      return user;
    });

    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
