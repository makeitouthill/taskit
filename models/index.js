const Job  = require('./job');
const Service   = require('./jobLocation');
const JobOffer = require('./jobOffer');
const Location = require('./location');
const Profile = require('./profile');
const Service = require('./service');
const ServiceRange = require('./serviceRange');
const JobStatusName= require('./jobStatusName');
const User = require('./user')


User.hasMany(JobOffer, {
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

JobOffer.hasOne(User, {
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Job, {
  foreignKey: 'customer_id',
  foreignKey: 'service_provider_id',
});

Job.hasOne(User, {
  foreignKey: 'customer_id',
  foreignKey: 'service_provider_id',
});

User.hasOne(ServiceRange, {
  foreignKey: 'service_provider_id',
  onDelete: 'CASCADE',
});

ServiceRange.hasOne(User,{
  foreignKey: 'service_provider_id',
  onDelete: 'CASCADE',
});

Profile.hasOne(User,{
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Profile, {
  foreignKey:'user_id',
  onDelete: 'CASCADE',
});

Location.hasOne(Profile,{
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

Profile.hasOne(Location,{
  foreignKey: 'location_id',
  onDelete: 'CASCADE',
});

JobOffer.hasOne(Service, {
  foreignKey:'service_id',
});

Service.hasMany(JobOffer,{
  foreignKey:'service_id',
});

Job.hasOne(Service,{
  foreignKey: 'service_id',
  
});

Service.hasMany(Job,{
  foreignKey: 'service_id',
 
});

Job.hasOne(JobStatusName,{
  foreignKey: 'job_id',
});

JobStatusName.hasOne(JobStatusName,{
  foreignKey: 'status_id',
  
});
// update location model
Job.hasOne(Location,{
  foreignKey: 'location_id',
});

//update location model
Location.hasMany(Job,{
  ForeignKey: 'location_id',
});

module.exports = { Job, JobLocation, JobOffer, Location, Profile, ServiceRange, Service,  User, JobStatusName};