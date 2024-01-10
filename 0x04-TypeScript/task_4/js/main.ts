// Interface describing the constructor of StudentClass
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the methods of StudentClass
interface StudentClass {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
const StudentClass: StudentClassConstructor = class implements StudentClass {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

// Create an instance of StudentClass
const student = new StudentClass('Alice', 'Smith');

// Test the methods of StudentClass
console.log(student.workOnHomework()); // Output: Currently working
console.log(student.displayName()); // Output: Alice
