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
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Job.hasOne(User, {
foreignKey: 'service_id',
onDelete: 'CASCADE',
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
  foreignKey:'user_id',
  foreignKey:'service_id',
  onDelete: 'CASCADE',
});

Service.hasMany(JobOffer,{
  foreignKey:'service_id',
  onDelete: 'CASCADE',
});

Job.hasOne(Service,{
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Service.hasMany(Job,{
  foreignKey: 'service_id',
  onDelete: 'CASCADE',
});

Job.hasOne(Job_status,{
  foreignKey: 'job_id',
  onDelete: 'CASCADE',
});

JobStatusName.hasOne(Job_status,{
  foreignKey: 'status_id',
  onDelete: 'CASCADE',
});
// update location model
Job.hasOne(location,{
  foreignKey: '',
  onDelete: 'CASCADE',
});

//update location model
Location.hasMany(job,{
  ForeignKey: '',
  onDelete: 'CASCADE',
});

module.exports = { Job, JobLocation, JobOffer, Location, Profile, ServiceRange, User};