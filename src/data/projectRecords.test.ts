import { describe, expect, it } from 'vitest';
import type { ProjectRecord } from './portfolioData';
import { featuredProjects, otherProjects, projectRecords } from './portfolioData';

const REQUIRED_FIELDS: Array<keyof ProjectRecord> = [
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
  it('preserves nine source records and adds presentation fields', () => {
    expect(projectRecords).toHaveLength(9);

    projectRecords.forEach((record) => {
      REQUIRED_FIELDS.forEach((field) => {
        expect(record[field], `${record.id ?? 'record'} missing ${field}`).toBeTruthy();
      });
      expect(record.shortSummary).toBeTruthy();
      expect(record.displayTitle).toBeTruthy();
      expect(record.displayClient).toBeTruthy();
      expect(record.domain).toBeTruthy();
      expect(Array.isArray(record.capabilities)).toBe(true);
      expect(Array.isArray(record.architecture)).toBe(true);
    });
  });

  it('lists the Salesforce SAP integration project first', () => {
    expect(projectRecords[0].id).toBe('PRJ-01');
    expect(projectRecords[0].name).toMatch(/Salesforce/i);
    expect(projectRecords[0].stack).toMatch(/SAP/i);
  });

  it('derives featured and other work in explicit editorial order', () => {
    expect(featuredProjects.map((record) => record.id)).toEqual([
      'PRJ-01',
      'PRJ-05',
      'PRJ-03',
      'PRJ-04',
    ]);
    expect(otherProjects.map((record) => record.id)).toEqual([
      'PRJ-02',
      'PRJ-06',
      'PRJ-08',
      'PRJ-07',
    ]);
    expect(featuredProjects[0].architecture).toEqual([
      'User',
      'Salesforce UI',
      'Approval',
      'Async Processing',
      'SAP',
      'Result Tracking',
    ]);
    expect(featuredProjects.slice(1).every((record) => record.architecture.length === 0)).toBe(true);
  });
});
