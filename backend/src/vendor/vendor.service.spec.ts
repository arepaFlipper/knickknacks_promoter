import { Test, TestingModule } from '@nestjs/testing';
import { VendorService } from './vendor.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './entities/vendor.entity';

describe('VendorService', () => {
  let service: VendorService;
  let vendorRepository: Repository<Vendor>;

  const mockVendorRepository = {
    find: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VendorService,
        {
          provide: getRepositoryToken(Vendor),
          useValue: mockVendorRepository,
        },
      ],
    }).compile();

    service = module.get<VendorService>(VendorService);
    vendorRepository = module.get<Repository<Vendor>>(
      getRepositoryToken(Vendor),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of vendors  🚴', async () => {
      const vendors = [
        { id: 1, name: 'Vendor 1' },
        { id: 2, name: 'Vendor 2' },
      ];
      mockVendorRepository.find.mockResolvedValue(vendors);

      const result = await service.findAll();
      expect(result).toEqual(vendors);
      expect(mockVendorRepository.find).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single vendor 🐫', async () => {
      const vendor = { id: 1, name: 'Vendor 1' };
      mockVendorRepository.findOne.mockResolvedValue(vendor);

      const result = await service.findOne(1);
      expect(result).toEqual(vendor);
      expect(mockVendorRepository.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create a new vendor 🏍', async () => {
      const vendorData = {
        name: 'New Vendor',
        contact_info: 'contact@newvendor.com',
      };
      const savedVendor = { id: 1, ...vendorData };
      mockVendorRepository.create.mockReturnValue(vendorData);
      mockVendorRepository.save.mockResolvedValue(savedVendor);

      const result = await service.create(vendorData);
      expect(result).toEqual(savedVendor);
      expect(mockVendorRepository.create).toHaveBeenCalledWith(vendorData);
      expect(mockVendorRepository.save).toHaveBeenCalledWith(vendorData);
    });
  });

  describe('update', () => {
    it('should update a vendor  🌏', async () => {
      const id = 1;
      const updateData = { name: 'Updated Vendor' };
      mockVendorRepository.update.mockResolvedValue({ affected: 1 });
      mockVendorRepository.findOne.mockResolvedValue({ id, ...updateData });

      const result = await service.update(id, updateData);
      expect(result).toEqual({ id, ...updateData });
      expect(mockVendorRepository.update).toHaveBeenCalledWith(id, updateData);
      expect(mockVendorRepository.findOne).toHaveBeenCalledWith(id);
    });
  });

  describe('remove ', () => {
    it('should remove a vendor 🐛', async () => {
      const id = 1;
      mockVendorRepository.delete.mockResolvedValue({ affected: 1 });

      await service.remove(id);
      expect(mockVendorRepository.delete).toHaveBeenCalledWith(id);
    });
  });
});
