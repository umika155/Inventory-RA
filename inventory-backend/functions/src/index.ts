import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Category } from './Models/Category';
import { Product } from './Models/Product';
import { Supplier } from './Models/Supplier';
import { TemperatureCoefficient } from './Models/TemperatureCoefficient';

admin.initializeApp();

//################################################
//          CATEGORY
//################################################

// POST /category
 export const CreateCategory = functions.https.onRequest( async (request, response) => {
    if(request.method === "POST")
    {
        const categoryReqBody = request.body;
        await admin.firestore().collection('category').add(categoryReqBody).then(
            result => {
                const tempCategory = new Category();
                tempCategory.Id = result.id;
                tempCategory.Name = categoryReqBody.Name;
                tempCategory.ParentId = categoryReqBody.ParentId;
                response.send(tempCategory);
        });
    }
});
 
// GET /category
 export const GetCategory = functions.https.onRequest( async (request, response) => {
    const categoryId = request.query.Id;
    await admin.firestore().collection('category').doc(categoryId).get().then(
        result => {
            response.send(result.data());
        });
});

// GET /categories
export const GetCategories = functions.https.onRequest( async (request, response) => {
    await admin.firestore().collection('category').get().then(
        result => {
            const categories: Category[] = [];
            result.forEach( category => {
                const tempCategory = new Category();
                tempCategory.Id = category.id;
                tempCategory.Name = category.data().Name;
                tempCategory.ParentId = category.data().ParentId;
                categories.push(tempCategory);
            });
            response.send(categories);
        });
});

// PUT /category
export const UpdateCategory = functions.https.onRequest( async (request, response) => {
    if(request.method === "PUT")
    {
        const reqBody = request.body;
        await admin.firestore().collection('category').doc(reqBody.Id).update({Name: reqBody.Name, ParentId: reqBody.ParentId}).then(
            result => {
                response.send(reqBody);
            });
    }
});

// DELETE /category
export const DeleteCategory = functions.https.onRequest( async (request, response) => {
    if(request.method === "DELETE")
    {
        const categoryId = request.query.Id;
        await admin.firestore().collection('category').doc(categoryId).delete().then(
            result => {
                response.send('Category ' + categoryId + ' is deleted');
            });
    }
});


//################################################
//          SUPPLIER
//################################################

// POST /supplier
export const CreateSupplier = functions.https.onRequest( async (request, response) => {
    if(request.method === "POST")
    {
        const supplier = request.body;
        await admin.firestore().collection('supplier').add(supplier).then(
            result => {
                const tempSupplier = new Supplier();
                tempSupplier.Id = result.id;
                tempSupplier.Name = supplier.Name;
                response.send(tempSupplier);
        });
    }
});
 
// GET /supplier
 export const GetSupplier = functions.https.onRequest( async (request, response) => {
    const supplierId = request.query.Id;
    await admin.firestore().collection('supplier').doc(supplierId).get().then(
        result => {
            response.send(result.data());
        });
});

// GET /suppliers
export const GetSuppliers = functions.https.onRequest( async (request, response) => {
    await admin.firestore().collection('supplier').get().then(
        result => {
            const suppliers: Supplier[] = [];
            result.forEach(supplier => {
                const tempSupplier = new Supplier();
                tempSupplier.Id = supplier.id;
                tempSupplier.Name = supplier.data().Name;
                suppliers.push(tempSupplier);
            });
            response.send(suppliers);
        });
});

// PUT /supplier
export const UpdateSupplier = functions.https.onRequest( async (request, response) => {
    if(request.method === "PUT")
    {
        const reqBody = request.body;
        await admin.firestore().collection('supplier').doc(reqBody.Id).update({Name: reqBody.Name}).then(
            result => {
                response.send(reqBody);
            });
    }
});

// DELETE /supplier
export const DeleteSupplier = functions.https.onRequest( async (request, response) => {
    if(request.method === "DELETE")
    {
        const supplierId = request.query.Id;
        await admin.firestore().collection('supplier').doc(supplierId).delete().then(
            result => {
                response.send('Supplier ' + supplierId + ' is deleted');
            });
    }
});

//################################################
//          TemperatureCoefficient
//################################################

export const GetTemperatureCoefficient = functions.https.onRequest((request, response) => {
    const itemList: string[] = ["COG", "YSV", "X5R", "X7R"];

    if(request.method === "GET")
    {
        const temperatureCoefficients: TemperatureCoefficient[] = [];
        let index = 0;
        itemList.forEach(element => {
            const temperatureCoefficient = new TemperatureCoefficient();
            temperatureCoefficient.Id = index;
            temperatureCoefficient.Name = element
            temperatureCoefficients.push(temperatureCoefficient);
            index++;
        });
        response.send(temperatureCoefficients);
    }
});

//################################################
//          PRODUCT
//################################################

// POST /product
export const CreateProduct = functions.https.onRequest( async (request, response) => {
    if(request.method === "POST")
    {
        const product = request.body;
        await admin.firestore().collection('product').add(product).then(
            result => {
                const tempProduct = new Product();
                tempProduct.Id = result.id;
                tempProduct.PartName = product.PartName;
                tempProduct.CategoryId = product.CategoryId;
                tempProduct.SubCategoryId = product.SubCategoryId;
                tempProduct.ManufacturerPartNumber = product.ManufacturerPartNumber;
                tempProduct.ManufacturerName = product.ManufacturerName;
                tempProduct.DatasheetLink = product.DatasheetLink;
                tempProduct.Size = product.Size;
                tempProduct.EIACaseCode = product.EIACaseCode;
                tempProduct.VoltageRatings = product.VoltageRatings;
                tempProduct.RatingTolarence = product.RatingTolarence;
                tempProduct.TemperatureCoefficientId = product.TemperatureCoefficientId;
                tempProduct.SupplierId = product.SupplierId;
                tempProduct.Remarks = product.Remarks;
                response.send(tempProduct);
        });
    }
});
 
// GET /product
 export const GetProduct = functions.https.onRequest( async (request, response) => {
    const productId = request.query.Id;
    await admin.firestore().collection('product').doc(productId).get().then(
        result => {
            response.send(result.data());
        });
});

// GET /product
export const GetProducts = functions.https.onRequest( async (request, response) => {
    await admin.firestore().collection('product').get().then(
        result => {
            const products: Product[] = [];
            result.forEach( product => {
                const tempProduct = new Product();
                tempProduct.Id = product.id;
                tempProduct.PartName = product.data().PartName;
                tempProduct.CategoryId = product.data().CategoryId;
                tempProduct.SubCategoryId = product.data().SubCategoryId;
                tempProduct.ManufacturerPartNumber = product.data().ManufacturerPartNumber;
                tempProduct.ManufacturerName = product.data().ManufacturerName;
                tempProduct.DatasheetLink = product.data().DatasheetLink;
                tempProduct.Size = product.data().Size;
                tempProduct.EIACaseCode = product.data().EIACaseCode;
                tempProduct.VoltageRatings = product.data().VoltageRatings;
                tempProduct.RatingTolarence = product.data().RatingTolarence;
                tempProduct.TemperatureCoefficientId = product.data().TemperatureCoefficientId;
                tempProduct.SupplierId = product.data().SupplierId;
                tempProduct.Remarks = product.data().Remarks;
                products.push(tempProduct);
            });
            response.send(products);
        });
});

// PUT /product
export const UpdateProduct = functions.https.onRequest( async (request, response) => {
    if(request.method === "PUT")
    {
        const reqBody = request.body;

        await admin.firestore().collection('product').doc(reqBody.Id).update(reqBody).then(
            result => {
                response.send(reqBody);
            });
    }
});

// DELETE /product
export const DeleteProduct = functions.https.onRequest( async (request, response) => {
    if(request.method === "DELETE")
    {
        const productId = request.query.Id;
        await admin.firestore().collection('product').doc(productId).delete().then(
            result => {
                response.send('Product ' + productId + ' is deleted');
            });
    }
});