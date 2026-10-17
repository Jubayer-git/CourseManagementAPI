import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './CreateCourse.dto';


export class UpdateCourseDto {
    title?: string;
    description?: string;
}