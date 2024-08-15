import { Repository } from 'typeorm';
import { ProductService } from '../src/product/product.service';
import { Product } from '../src/product/entities/product.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ProductService', () => {
  let service: ProductService;
  let repo: Repository<Product>;

  const mockRepository = {
    create: jest.fn(),
    save: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should successfully create a product 🤯', async () => {
      const productData = {
        name: 'Test Product',
        description: 'Test Description',
        price: 9.99,
      };

      const savedProduct = { id: 1, ...productData };

      jest.spyOn(repo, 'create').mockReturnValue(productData as Product);
      jest.spyOn(repo, 'save').mockResolvedValue(savedProduct as Product);

      const result = await service.create(productData);
      expect(result).toEqual(savedProduct);
      // expect(repo.create).toEqual(productData);
      // expect(repo.save).toEqual(productData);
    });
  });

  describe('findAll', () => {
    it('should successfully create a product 😥', async () => {
      const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ];

      jest.spyOn(repo, 'find').mockResolvedValue(products as Product[]);

      const result = await service.findAll();
      expect(result).toEqual(products);
      expect(repo.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should update a product', async () => {
      const productId = 1;
      const updateData = { name: 'Updated Product' };
      const updatedProduct = { id: productId, ...updateData };

      jest.spyOn(repo, 'update').mockResolvedValue(undefined);
      jest.spyOn(repo, 'findOne').mockResolvedValue(updatedProduct as Product);

      const result = await service.update(productId, updateData);
      expect(result).toEqual(updatedProduct);
      expect(repo.update).toHaveBeenCalledWith(productId, updateData);
      expect(repo.findOne).toHaveBeenCalledWith({
        where: { id: productId },
        // relations: ['vendor', 'pictures'],
      });
    });
  });

  describe('remove', () => {
    it('should remove a product 🥸', async () => {
      const productId = 1;
      jest.spyOn(repo, 'delete').mockResolvedValue(undefined);

      await service.remove(productId);

      expect(repo.delete).toHaveBeenCalledWith(productId);
    });
  });
});
