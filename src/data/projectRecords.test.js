import { describe, expect, it } from 'vitest';
import { projectRecords } from './portfolioData.js';

const REQUIRED_FIELDS = [
  'id',
  'period',
  'name',
  'role',
  'stack',
  'scope',
  'team',
  'company',
  'status',
  'problem',
  'decision',
  'outcome',
];

describe('projectRecords', () => {
  it('contains nine work-spec records with required fields', () => {
    expect(projectRecords).toHaveLength(9);

    projectRecords.forEach((record) => {
      REQUIRED_FIELDS.forEach((field) => {
        expect(record[field], `${record.id ?? 'record'} missing ${field}`).toBeTruthy();
      });
    });
  });

  it('lists the Salesforce SAP integration project first', () => {
    expect(projectRecords[0].id).toBe('PRJ-01');
    expect(projectRecords[0].name).toMatch(/Salesforce/i);
    expect(projectRecords[0].stack).toMatch(/SAP/i);
  });
});
