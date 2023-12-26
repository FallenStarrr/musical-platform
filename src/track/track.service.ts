import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";
import { CommentDocument } from "./schemas/comment.schema";
import { FileService } from "src/file/file.service";
import { Model, ObjectId } from "mongoose";
import { CreateTrackDto } from "./dto/create-track-dto";
import { CreateCommentDto } from "./dto/create-comment-dto";





@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        private fileService: FileService
    ) {}

    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {

    }


    async getAll(): Promise<Track[]>{

    }

    async getOne(id: ObjectId): Promise<Track> {

    }

    async delete(id: ObjectId){

    }

    async addComment(dto: CreateCommentDto): Promise<Comment> {
        
    }
}