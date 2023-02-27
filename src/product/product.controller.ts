import {Body, Controller, Post, Get, Param, Delete, Patch, HttpCode} from '@nestjs/common';
import {Product} from "./product.model/product.model";
import {FindProductDto} from "./dto/findProduct.dto";

@Controller('product')
export class ProductController {
    @Post('create')
    async create (@Body() dto: Omit<Product, '_id'>){

    }

    @Get(':id')
    async  get(@Param('id') id: string) {

    }

    @Delete(':id')
    async delete (@Param('id') id: string){

    }

    @Patch(':id')
    async patch (@Param('id') id: string, @Body() dto: Product){

    }

    @HttpCode(200)
    @Post('create')
    async fiend (@Body() dto: FindProductDto) {

    }
}
