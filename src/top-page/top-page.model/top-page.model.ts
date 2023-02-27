import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class HhData {
    count: number;
    juniorSalary: number;
    middleSalary: number;
    seniorSalary: number;
}

export class TopPageAdvantage {
    title: string;
    description: string;
}
@Schema()
export class TopPage {
    _id: string;
    @Prop({enum: TopLevelCategory})
    firstLevelCategory: TopLevelCategory;
    @Prop()
    secondLevelCategory: string;
    @Prop({unique: true})
    alias: string;
    @Prop()
    title: string;
    @Prop()
    category: string;
    @Prop({type: () => [HhData]})
    hh?: HhData;
    @Prop({type: () => [TopPageAdvantage]})
    advantages: TopPageAdvantage[];
    @Prop()
    seoText: string;
    @Prop()
    tagsTitle: string;
    @Prop({type: () => [String]})
    tags: string[];

}
export const TopPageSchema = SchemaFactory.createForClass(TopPage);
