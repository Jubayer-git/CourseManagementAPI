
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CreateCourseDto } from './Dto/CreateCourse.dto';
import { UpdateCourseDto } from './Dto/UpdateCourse.dto';

@Injectable()
export class CourseService {


  private courses: any[] = [];
  private nextId: number = 1;

  getAllCourses() {
    return {
      message: 'All courses fetched successfully',
      data: this.courses,
    };
  }

  getCourseById(id: string) {
    const course = this.courses.find(
      (course) => course.id === Number(id),
    );

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    return {
      message: 'Course fetched successfully',
      data: course,
    };
  }

  createCourse(dto: CreateCourseDto) {
    const course = {
      ...dto,
      id: this.nextId,
    };

    this.nextId++;

    this.courses.push(course);

    return {
      message: 'Course created successfully',
      data: course,
    };
  }

  updateCourse(id: string, dto: UpdateCourseDto) {
    const course = this.courses.find(
      (course) => course.id === Number(id),
    );

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    Object.assign(course, dto);

    return {
      message: 'Course updated successfully',
      data: course,
    };
  }

  patchCourse(id: string, dto: UpdateCourseDto) {
    const course = this.courses.find(
      (course) => course.id === Number(id),
    );

    if (!course) {
      throw new NotFoundException('Course not found');
    }

    Object.assign(course, dto);

    return {
      message: 'Course patched successfully',
      data: course,
    };
  }

  deleteCourse(id: string) {
    const index = this.courses.findIndex(
      (course) => course.id === Number(id),
    );

    if (index === -1) {
      throw new NotFoundException('Course not found');
    }

    this.courses.splice(index, 1);

    return {
      message: 'Course deleted successfully',
    };
  }
}
