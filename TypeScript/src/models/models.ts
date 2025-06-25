import mongoose, {Schema, Document} from "mongoose";

interface Iuser extends Document{
title: string,
category:string,
id: number
}

const productSchema = new Schema<Iuser>({
  title: String,
  category : String,
  id: Number
})

const Product = mongoose.model<Iuser>('Product', productSchema)

export {Product, Iuser}